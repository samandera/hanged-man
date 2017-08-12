import manageHangedmanParts from '../reducers/manageHangedmanParts';
import {displayHangedmanParts, initialHangedmanState} from '../reducers/manageHangedmanParts';
import {DISPLAY_HANGEDMAN_PART} from '../reducers/actionTypes';
import triggerEvent from 'trigger-event';

describe("Followed variables should exist", () => {
  it("Reducer that manages hangedman parts should exist", () => {
    expect(manageHangedmanParts).toBeDefined()
  });
  it("Action type that displays hangedman parts should exist", () => {
    expect(DISPLAY_HANGEDMAN_PART).toBeDefined()
  });
  it("Function that displays hangedman parts should exist", () => {
    expect(displayHangedmanParts).toBeDefined()
  });
  it("inital state should be defined", () => {
    expect(initialHangedmanState).toBeDefined()
  });
});

describe("Followed variables should have specified features", () => {
  it("initialHangedmanState should have the property that holds the visible hangedman's parts", () => {
    expect(initialHangedmanState).toHaveProperty('visibleParts');
  });
  it("initialHangedmanState should have the property that holds all the hangedman parts", () => {
    expect(initialHangedmanState).toHaveProperty('hangedmanParts');
  })
});

describe("Hangedman functions behaviour", () => {
  it("manageHangedmanParts should return an object", () => {
    expect(typeof manageHangedmanParts(
      initialHangedmanState,
      {
        type:DISPLAY_HANGEDMAN_PART,
        visibleParts:['a'],
        hangedmanParts:['b']
      }
    )).toBe('object');
  });

  it("manageHangedmanParts should return object of exactly the same keys as initialHangedmanState has", () => {
    expect(Object.keys(manageHangedmanParts(
      initialHangedmanState,
      {
        type:DISPLAY_HANGEDMAN_PART,
        visibleParts:['a'],
        hangedmanParts:['b']
      }
    ))).toEqual(Object.keys(initialHangedmanState));
  })

  it("displayHangedmanParts should take and remove first element from the hangedmanParts array and put it to an end of the visibleParts array", () => {
    const visibleParts = ['a','b'];
    const hangedmanParts = ['c', 'd', 'e'];
    expect(displayHangedmanParts(visibleParts, hangedmanParts)).toEqual({
      visibleParts:['a','b','c'],
      hangedmanParts:['d','e']
    })
  });

  it("calling manageHangedmanParts with DISPLAY_HANGEDMAN_PART type should take and remove first element from the state.hangedmanParts array and put it to an end of the state.visibleParts array", () => {
    const visibleParts = ['a','b'];
    const hangedmanParts = ['c', 'd', 'e'];
    expect(manageHangedmanParts(
      initialHangedmanState,
      {
        type:DISPLAY_HANGEDMAN_PART,
        visibleParts,
        hangedmanParts
      }
    )).toEqual({
      visibleParts:['a','b','c'],
      hangedmanParts:['d','e']
    })
  })
})
