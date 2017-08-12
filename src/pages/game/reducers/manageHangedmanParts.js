import {DISPLAY_HANGEDMAN_PART} from './actionTypes';

export const initialHangedmanState = {
  visibleParts: [],
  hangedmanParts: [
    "Head",
    "Neck",
    "Corpus",
    "LeftArm",
    "LeftPalm",
    "RightArm",
    "RightPalm",
    "LeftLeg",
    "LeftFoot",
    "RightLeg",
    "RightFoot"
  ]
};
export const displayHangedmanParts = (visibleParts, hangedmanParts) => {
  visibleParts = new Array(...visibleParts);
  hangedmanParts = new Array(...hangedmanParts);
  visibleParts.push(hangedmanParts.shift());
  return {visibleParts, hangedmanParts}
};
const manageHangedmanParts = (state=initialHangedmanState, action) => {
  switch(action.type) {
    case DISPLAY_HANGEDMAN_PART: return Object.assign({}, state, displayHangedmanParts(action.visibleParts, action.hangedmanParts));
  }
  return state;
};
export default manageHangedmanParts;
