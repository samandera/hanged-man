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

export const filterList = data => {
  let pagesData;
  const pagesIds = [];
  if (data && data.query && data.query.categorymembers) {
    pagesData = data.query.categorymembers;
    pagesData.forEach(page => {
      if (page.ns === 0) {pagesIds.push(page.pageid)}
    })
  }
  return {pagesIds};
}

export const categoriesInLanguages = {
  en: "Category%3AEnglish_idioms"
}

const makeIdiomsIndexesList = (idiomsLang, cmcontinue = "", fetchMethod = fetchIdiomsIndexesList) => {
  fetchMethod(`https://${idiomsLang}.wiktionary.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=${categoriesInLanguages[idiomsLang]}&cmlimit=500&cmcontinue=${cmcontinue}`)
  .then(data => filterList(data));
}

export default makeIdiomsIndexesList;
