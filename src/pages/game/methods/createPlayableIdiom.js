import handleResponse from "./handleResponse";
import { SET_LOADING_MESSAGE } from '../reducers/actionTypes';

const fetchIdiom = (lang, title) => {
  const url = `https://${lang}.wiktionary.org/w/api.php?action=parse&format=json&page=${title}`;
  return fetch( url, {method: 'get'} )
  .then(response => handleResponse(response, "idiom page"))
  .catch(error => {console.log(error.message)})
}

const definitionSections = {
  en: ["Noun", "Verb", "Adverb", "Interjection", "Phrase", "Prepositional phrase", "Preposition", "Proverb", "Adjective"],
  fr: ["Locution adverbiale", "Adverbe", "Nom commun", "Locution nominale", "Locution verbale", "Locution adjectivale", "Locution-phrase", "Nom propre", "Locution interjective"]
}

export const PlayableIdiom = class {
  constructor(fetchFunction) {
    this.fetchFunction = fetchFunction;

    this.create = (dispatch, lang, titles) => {
      dispatch({
        type: SET_LOADING_MESSAGE,
        message: `Loading playable idiom`
      });
      return this.getRandomTitle(titles).then(title => this.fetchFunction(lang, title))
      .then(idiom => {
        const {title} = idiom.parse;
        const definition = idiom.parse.text['*'];
        return Promise.resolve({title, definition})
      })
    }

    this.getRandomTitle = (titles) => {
      return Promise.resolve(titles[Math.floor(Math.random()*titles.length)])
    }
  }
}

const createPlayableIdiom = new PlayableIdiom(fetchIdiom);
export default createPlayableIdiom.create
