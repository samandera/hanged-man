import { LOAD_IDIOM } from '../reducers/actionTypes';
import { indexArrayMethods } from './makeIdiomsIndexesArray';

const loadIdiom = (dispatch, lang, fetchIdiomsArray = indexArrayMethods.fetchIdiomsIndexesList) => {
  dispatch({type: LOAD_IDIOM, loadIdiom: true});
  return indexArrayMethods.makeIdiomsIndexesArray(lang, fetchIdiomsArray)
  .then(() => dispatch({type: LOAD_IDIOM, loadIdiom: false}))
}

export default loadIdiom;
