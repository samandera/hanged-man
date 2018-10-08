import { LOAD_IDIOM } from './actionTypes';

const initialState = {
  loadIdiom: false
}

const setFlags = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_IDIOM: return Object.assign({}, state, {loadIdiom: action.loadIdiom});
    default: return state;
  }
}

export default setFlags;
