export const categoriesInLanguages = {
  en: "Category%3AEnglish_idioms",
  fr: "Catégorie%3AMétaphores_en_français"
}

export const fetchIdiomsIndexesList = (url) => {
  return fetch( url, {method: 'get'} ).then(response => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return;
    }
    return response.json()
  })
}

export const filterList = (data, pagesIds = []) => {
  let pagesData;
  let cmcontinue = "";
  if (data && data.query && data.query.categorymembers) {
    pagesData = data.query.categorymembers;
    pagesData.forEach(page => {
      if (page.ns === 0) {pagesIds.push(page.pageid)}
    })
  }
  if (data && data.continue && data.continue.cmcontinue) {
    cmcontinue = data.continue.cmcontinue;
  }
  return {pagesIds, cmcontinue};
}

export const fetchNextIdiomsIndexesPage = (idiomsLang, data, fetchingPageNrInfo, fetchMethod) => {
  if (data && data.cmcontinue) {
    return indexArrayMethods.wrapSingleIndexesQuery(
      idiomsLang, fetchingPageNrInfo, data.pagesIds, data.cmcontinue, fetchMethod
    )
  } else {
    localStorage.setItem(`${idiomsLang}Idioms`, JSON.stringify(data.pagesIds));
    return Promise.resolve(data.pagesIds);
  }
}

export const wrapSingleIndexesQuery = (idiomsLang, fetchingPageNrInfo, pagesIds, cmcontinue, fetchMethod) => {
  console.log(fetchingPageNrInfo);
  fetchingPageNrInfo++;
  return fetchMethod(`https://${idiomsLang}.wiktionary.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=${categoriesInLanguages[idiomsLang]}&cmlimit=500&cmcontinue=${cmcontinue}`)
  .then(data => filterList(data, pagesIds))
  .then(data => fetchNextIdiomsIndexesPage(idiomsLang, data, fetchingPageNrInfo, fetchMethod));
}

const makeIdiomsIndexesArray = (idiomsLang, fetchMethod = fetchIdiomsIndexesList) => {
  const localStorageKey = `${idiomsLang}Idioms`;
  const indexes = localStorage.getItem(localStorageKey);
  if (indexes === null) {
    const initialPageNumber = 1;
    const initialIndexesArray = [];
    const initialNextPage = "";
    return indexArrayMethods.wrapSingleIndexesQuery(
      idiomsLang, initialPageNumber, initialIndexesArray, initialNextPage, fetchMethod
    );
  }
  return Promise.resolve(JSON.parse(indexes))
}

export const indexArrayMethods = {
  wrapSingleIndexesQuery
}

export default makeIdiomsIndexesArray;
