import { SET_LOADING_MESSAGE } from './actionTypes';

const initialState = {
  loadingMessage: ""
}

const setLoading = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOADING_MESSAGE: return Object.assign({}, state, action.message);
    default: return state;
  }
}

export default setLoading;
