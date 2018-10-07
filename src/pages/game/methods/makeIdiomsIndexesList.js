export const fetchIdiomsIndexesList = (url) => {
  return fetch(
    url,
    {
      method: 'get',
      mode: "cors"
    }
  ).then(response => {
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

const fetchNextIdiomsIndexesPage = (idiomsLang, data, fetchingPageNrInfo) => {
  if (data && data.cmcontinue) {
    return wrapSingleIndexesQuery(idiomsLang, data.pagesIds, data.cmcontinue, fetchingPageNrInfo)
  } else {
    return data.pagesIds;
  }
}

export const categoriesInLanguages = {
  en: "Category%3AEnglish_idioms",
  fr: "Catégorie%3AMétaphores_en_français"
}

const wrapSingleIndexesQuery = (idiomsLang, pagesIds = [], cmcontinue = "", fetchingPageNrInfo) => {
  console.log(fetchingPageNrInfo);
  fetchingPageNrInfo++;
  return fetchIdiomsIndexesList(`https://${idiomsLang}.wiktionary.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=${categoriesInLanguages[idiomsLang]}&cmlimit=500&cmcontinue=${cmcontinue}`)
  .then(data => filterList(data, pagesIds))
  .then(data => fetchNextIdiomsIndexesPage(idiomsLang, data, fetchingPageNrInfo));
}

const makeIdiomsIndexesList = (idiomsLang) => {
  const fetchingPageNrInfo = 1;
  return wrapSingleIndexesQuery(idiomsLang, [], "", fetchingPageNrInfo).then(data => console.log(data))
}

export default makeIdiomsIndexesList;
