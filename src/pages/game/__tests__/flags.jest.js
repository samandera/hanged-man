import setFlag from '../reducers/flags';
import {LOAD_IDIOM} from '../reducers/actionTypes';

describe("test flags", () => {
  it("reducer that sets flags should be defined", () => {
    expect(setFlag).toBeDefined();
  });

});

describe("test setting loading idioms flag", () => {
  it("LOAD_IDIOM action should be defined", () => {
    expect(LOAD_IDIOM).toBeDefined();
  });
  it("should return a new object", () => {
    const state = {loadIdiom: false};
    const newState = setFlag(state, {type: LOAD_IDIOM, loadIdiom: false});
    expect(newState).not.toBe(state);
  });
  it("output's loadIdiom key value should be the same as input's", () => {
    const state = {loadIdiom: false};
    const newState = setFlag(state, {type: LOAD_IDIOM, loadIdiom: false});
    expect(newState.loadIdiom).toBe(state.loadIdiom);
  });
  it("output's loadIdiom key value should be different from input's", () => {
    const state = {loadIdiom: false};
    const newState = setFlag(state, {type: LOAD_IDIOM, loadIdiom: true});
    expect(newState.loadIdiom).not.toBe(state.loadIdiom);
  });
  it("output's loadIdiom key value should true", () => {
    const state = {loadIdiom: false};
    const newState = setFlag(state, {type: LOAD_IDIOM, loadIdiom: true});
    expect(newState.loadIdiom).toBeTruthy();
  });
  it("output's loadIdiom key value should falsy", () => {
    const state = {loadIdiom: true};
    const newState = setFlag(state, {type: LOAD_IDIOM, loadIdiom: false});
    expect(newState.loadIdiom).toBeFalsy();
  });
})
