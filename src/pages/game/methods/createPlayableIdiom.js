import handleResponse from "./handleResponse";
import { SET_LOADING_MESSAGE } from '../reducers/actionTypes';

const getRandomTitle = titles => (
  Promise.resolve(titles[Math.floor(Math.random()*titles.length)])
)

const fetchIdiom = (lang, title) => {
  const url = `https://${lang}.wiktionary.org/w/api.php?action=parse&format=json&page=${title}`;
  return fetch( url, {method: 'get'} )
  .then(response => handleResponse(response, "idiom page"))
  .catch(error => {console.log(error.message)})
}

export const createPlayableIdiom = (dispatch, lang, titles) => {
  dispatch({
    type: SET_LOADING_MESSAGE,
    message: `Loading playable idiom`
  });
  return getRandomTitle(titles).then(title => fetchIdiom(lang, title))
  .then(idiom => {
    const {title} = idiom.parse;
    const definition = idiom.parse.text['*'];
    const sections = idiom.parse.sections;
    return Promise.resolve({title, definition, sections})
    //keywords that are interesting for us in sections: Noun, Verb, Adverb, Interjection, Phrase, Prepositional phrase, Preposition, Proverb, Adjective
    //keywords in sections definetely to avoid: Pronunciation, English, Synonyms, Antonyms, References, See also, Usage notes, Etymology, Hypernyms, Related terms, Translations, Coordinate terms, Derived terms, Anagrams, Alternative forms
  })
}
