import store from '../reducers/store';

const fetchWord = () => {
  const maxWordLength = 12;
  const apiRequest = `http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=${maxWordLength}&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;
  fetch(
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
          type: 'SET_WORD'
        });
      });
  }).catch(function(err){
    console.log(err)
  });
};

export default fetchWord;
