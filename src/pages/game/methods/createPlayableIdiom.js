import handleResponse from "./handleResponse";
import { SET_LOADING_MESSAGE, SET_WORD } from '../reducers/actionTypes';

const fetchIdiom = (lang, title) => {
  const url = `https://${lang}.wiktionary.org/w/api.php?action=parse&format=json&page=one and only`;
  //const url = `https://${lang}.wiktionary.org/w/api.php?action=parse&format=json&page=${title}`;
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
      console.log(definitions);
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
          console.log(sectionName);
          console.log(definition.match(htmlTreeHeader));
          const startSectionIndex = definition.indexOf("<ol", headerIndex);
          const endSectionIndex = definition.indexOf("</ol>", startSectionIndex);
          definitions.push(definition.substring(startSectionIndex, endSectionIndex + "</ol>".length))
        }
      })
      console.log(definitions);
      return definitions;
    }

    this.removeExamplesFromDefinitions = definitions => {
      return definitions.map(definition => {
        const exampleRegExp = /<dl>.*.<\/dl>/;
        const examples = definition.match(exampleRegExp);
        return examples
          ? examples.map(example => {
            return definition.replace(example, "");
          })
          : definition
      })
    }
  }
}

const createPlayableIdiom = new PlayableIdiom(fetchIdiom);
export default createPlayableIdiom.create
