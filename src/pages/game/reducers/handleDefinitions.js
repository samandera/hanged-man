import { SET_DEFINITION, RESET_DEFINITIONS } from './actionTypes';

const initialState = {
  definitions : []
};

const handleDefinitions = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFINITION: return Object.assign({}, state, {definitions: action.definitions});
    case RESET_DEFINITIONS: return Object.assign({}, state, {definitions: []});
    default: return state;
  }
}

export default handleDefinitions;
