import handleResponse from "./handleResponse";
import { SET_LOADING_MESSAGE } from '../reducers/actionTypes';

const getRandomTitle = titles => (
  Promise.resolve(titles[Math.floor(Math.random()*titles.length)])
)

const fetchIdiom = (lang, title) => {
  return fetch(
    `${lang}.wiktionary.org/w/api.php?action=parse&page=${title}`,
    {method: 'get'}
  ).then(response => handleResponse(response, "idiom page"))
}

export const createPlayableIdiom = (dispatch, lang, titles) => {
  dispatch({
    type: SET_LOADING_MESSAGE,
    message: `Loading playable idiom`
  });
  return getRandomTitle(titles)//.then(title => fetchIdiom(lang, title))
}
