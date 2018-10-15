import {RESET_HANGEDMAN, UPDATE_HANGEDMAN} from './actionTypes';
const initialState = {
  hangedman: [
    {bodyPart: 'tree', visible: false},
    {bodyPart: 'left-calf', visible: false},
    {bodyPart: 'right-calf', visible: false},
    {bodyPart: 'right-thigh', visible: false},
    {bodyPart: 'left-thigh', visible: false},
    {bodyPart: 'corpse', visible: false},
    {bodyPart: 'head', visible: false},
    {bodyPart: 'hair', visible: false},
    {bodyPart: 'left-arm', visible: false},
    {bodyPart: 'right-arm', visible: false}
  ]
};

const updateHangedman = hangedmanState => {
  const firstHiddenElement = hangedmanState.find((el, i) => {
    if (!el.visible) {return i++}
  });
  if (firstHiddenElement !== undefined && firstHiddenElement < hangedmanState.length) {
    hangedmanState[firstHiddenElement].visible = true;
  }
  return {hangedman: hangedmanState}
}


const displayHangedMan = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HANGEDMAN: return Object.assign({}, state, updateHangedman(action.hangedman));
    case RESET_HANGEDMAN: return Object.assign({}, state, initialState);
    default: return state;
  }
}

export default displayHangedMan;
