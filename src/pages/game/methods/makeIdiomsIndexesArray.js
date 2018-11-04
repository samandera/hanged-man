import { SET_LOADING_MESSAGE } from '../reducers/actionTypes';
import handleResponse from "./handleResponse"

export const categoriesInLanguages = {
  en: "Category%3AEnglish_idioms",
  fr: "Catégorie%3AIdiotismes_animaliers_en_français"
}

const makeIdiomsIndexesArray = (dispatch, idiomsLang, fetchMethod = fetchIdiomsIndexesList) => {
  const localStorageKey = `${idiomsLang}Idioms`;
  const indexes = localStorage.getItem(localStorageKey);
  if (indexes === null) {
    const initialPageNumber = 1;
    return indexArrayMethods.singleIndexesQuery(
      dispatch, idiomsLang, initialPageNumber, {pagesTitles: [], cmcontinue: ""}, fetchMethod
    );
  }
  return Promise.resolve(JSON.parse(indexes))
}

export const fetchIdiomsIndexesList = (url) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return fetch( proxyurl + url, {method: 'get'} )
  .then(response => handleResponse(response, "idiom indexes list"))
  .catch(error => {console.log(error.message)})
}

export const singleIndexesQuery = (dispatch, idiomsLang, fetchingPageNrInfo, titlesData, fetchMethod) => {
  dispatch({
    type: SET_LOADING_MESSAGE,
    message: `Loading idioms's page no. ${fetchingPageNrInfo}`
  });
  fetchingPageNrInfo++;
  return fetchMethod(`https://${idiomsLang}.wiktionary.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=${categoriesInLanguages[idiomsLang]}&cmlimit=500&cmcontinue=${titlesData.cmcontinue}`)
  .then(data => indexArrayMethods.filterList(data, titlesData.pagesTitles))
  .then(data => indexArrayMethods.fetchNextIdiomsIndexesPage(dispatch, idiomsLang, data, fetchingPageNrInfo, fetchMethod));
}

export const filterList = (data, pagesTitles = []) => {
  let pagesData;
  let cmcontinue = "";
  if (data && data.query && data.query.categorymembers) {
    pagesData = data.query.categorymembers;
    pagesData.forEach(page => {
      if (page.ns === 0) {pagesTitles.push(page.title)}
    })
  }
  if (data && data.continue && data.continue.cmcontinue) {
    cmcontinue = data.continue.cmcontinue;
  }
  return {pagesTitles, cmcontinue};
}

export const fetchNextIdiomsIndexesPage = (dispatch, idiomsLang, data, fetchingPageNrInfo, fetchMethod) => {
  if (data && data.cmcontinue) {
    return indexArrayMethods.singleIndexesQuery(
      dispatch, idiomsLang, fetchingPageNrInfo, data, fetchMethod
    )
  } else {
    localStorage.setItem(`${idiomsLang}Idioms`, JSON.stringify(data.pagesTitles));
    return Promise.resolve(data.pagesTitles);
  }
}

export const indexArrayMethods = {
  singleIndexesQuery,
  filterList,
  fetchNextIdiomsIndexesPage,
  makeIdiomsIndexesArray,
  fetchIdiomsIndexesList
}

export default makeIdiomsIndexesArray;
