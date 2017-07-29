import store from '../../store';
import {SET_WORD} from '../reducers/actionTypes';


const setWordToLocalStorage = () => {
  let words = JSON.parse(localStorage.getItem('words'));
  (words === null) && (words = []);
  let word = store.getState().wordState.word;
  words.push(word);
  localStorage.setItem('words', JSON.stringify(words));
};

const fetchWord = () => {
  const maxWordLength = 12;
  const apiRequest = `http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=${maxWordLength}&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;
  let promise = fetch(
    apiRequest,
    {method: 'get'}
  ).then(response => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return;
    }
    response.json().then(data => {
      store.dispatch({
        word: data.word,
        type: SET_WORD
      });
      setWordToLocalStorage();
    });
  }).catch(function(err){
    console.log(err)
  });
  return promise;
};

export default fetchWord;
