import store from '../../store';

/*
ex.
language = 'en'
language = 'fr'

category = 'Category:English_idioms'
category = 'Catégorie:Locutions_verbales_en_français'
*/
const getIdiomsList = (language,category,next = '') => {
  const cmcontinue =  (next.length > 0) ? `&cmcontinue=${next}` : '';
  const apiRequest = `https://${language}.wiktionary.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=${category}&cmlimit=500${cmcontinue}`
  fetch(
    apiRequest,
    {
      method: 'get',
      mode: 'no-cors'
    }
  ).then(response => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return;
    }
    response.json().then(data => {
      console.log(data);
      
      /*
      check if data.continue exists. If does, call getIdiomsList(language,category,data.continue.cmcontinue);
      */
    })
  })

}
export default getIdiomsList;
