import handleResponse from "./handleResponse";
import { SET_LOADING_MESSAGE, SET_WORD } from '../reducers/actionTypes';

const fetchIdiom = (lang, title) => {
  //const url = `https://${lang}.wiktionary.org/w/api.php?action=parse&format=json&page=${title}`;grind down
  const url = `https://${lang}.wiktionary.org/w/api.php?action=parse&format=json&page=grind down`
  return fetch( url, {method: 'get'} )
  .then(response => handleResponse(response, "idiom page"))
  .catch(error => {console.log(error.message)})
}

export const PlayableIdiom = class {
  constructor(fetchFunction) {
    this.fetchFunction = fetchFunction;

    this.create = (dispatch, lang, titles) => {
      dispatch({
        type: SET_LOADING_MESSAGE,
        message: `Loading playable idiom`
      });
      return this.getRandomTitle(titles)
      .then(title => this.fetchFunction(lang, title))
      .then(idiom => this.setIdiomData(dispatch, lang, idiom))
    }

    this.definitionSections = {
      en: ["Noun", "Verb", "Adverb", "Interjection", "Phrase", "Prepositional phrase", "Preposition", "Proverb", "Adjective"],
      fr: ["Locution adverbiale", "Adverbe", "Nom commun", "Locution nominale", "Locution verbale", "Locution adjectivale", "Locution-phrase", "Nom propre", "Locution interjective"]
    }

    this.getRandomTitle = (titles) => {
      return Promise.resolve(titles[Math.floor(Math.random()*titles.length)])
    }

    this.setIdiomData = (dispatch, lang, idiom) => {
      const {title} = idiom.parse;
      let definitions = this.extractDefinitions(idiom.parse.text['*'], lang);
      definitions = this.removeExamplesFromDefinitions(definitions);
      let extractedDefinitions = this.extractHigestLevelListItems(definitions);
      let strippedDefinitions = this.stripFromHTMLelements(extractedDefinitions);
      console.log(strippedDefinitions);
      dispatch({
        type: SET_WORD,
        word: title
      });
      return Promise.resolve({title})
    }

    this.extractDefinitions = (definition, lang) => {
      const definitions = [];
      this.definitionSections[lang].forEach(sectionName => {
        const htmlTreeHeader = new RegExp('<h3>.*.>' + sectionName + '<.*.</h3>');
        const headerIndex = definition.search(htmlTreeHeader);
        if (headerIndex >= 0) {
          const startSectionIndex = definition.indexOf("<ol", headerIndex);
          const endSectionIndex = definition.indexOf("</ol>", startSectionIndex);
          definitions.push(definition.substring(startSectionIndex, endSectionIndex + "</ol>".length))
        }
      })
      return definitions;
    }

    this.removeExamplesFromDefinitions = definitions => {
      const strippedFromExamples = [];
      definitions.forEach(definition => {
        const exampleRegExp = /<dl>.*.<\/dl>/;
        const examples = definition.match(exampleRegExp);
        examples !== null
          && examples.map(example => {
            definition = definition.replace(example, "");
          });
          strippedFromExamples.push(definition)
      });
      return strippedFromExamples;
    }

    this.stripFromHTMLelements = definitions => {
      let htmlElementRegExp = /<.*?.>/g;
      let strippedDefinitions = [];
      definitions.forEach(definition => {
        let htmlElements = [];
        if (typeof definition === "string") {
          htmlElements = definition.match(htmlElementRegExp);
          htmlElements.forEach(el => {
            definition = definition.replace(el, "");
          });
          strippedDefinitions.push(definition);
        } else {
          strippedDefinitions.push(this.stripFromHTMLelements(definition));
        }
      })
      return strippedDefinitions;
    }

    this.extractHigestLevelListItems = definitions => {
      const extractedDefinitions = [];
      definitions.forEach(definition => {
        const openLi = "<li>";
        const closeLi = "</li>";
        let openIndex = definition.indexOf(openLi);
        let closeIndex = definition.indexOf(closeLi, openIndex);
        let substractedDefinition = "";
        let substractedDefinitionsArray = [];
        while (openIndex > -1 && closeIndex > -1) {
          if (substractedDefinition.length === 0) {
            substractedDefinition = definition.substring(openIndex + openLi.length, closeIndex);
          }
          else if (substractedDefinitionsArray.length === 0) {
            substractedDefinitionsArray.push(substractedDefinition);
            substractedDefinition = definition.substring(openIndex + openLi.length, closeIndex);
            substractedDefinitionsArray.push(substractedDefinition);
          }
          else {
            substractedDefinition = definition.substring(openIndex + openLi.length, closeIndex);
            substractedDefinitionsArray.push(substractedDefinition);
          }
          definition = definition.replace(openLi + substractedDefinition + closeLi, "");
          openIndex = definition.indexOf(openLi);
          closeIndex = definition.indexOf(closeLi, openIndex);
        }

        if (substractedDefinitionsArray.length > 0) {
          extractedDefinitions.push(substractedDefinitionsArray)
        }
        else {extractedDefinitions.push(substractedDefinition)}
      });

      return extractedDefinitions;
    }
  }
}

const createPlayableIdiom = new PlayableIdiom(fetchIdiom);
export default createPlayableIdiom.create
