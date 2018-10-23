import setMissedLetters from '../reducers/setMissedLetters';
import {initialMissedLettersState} from '../reducers/setMissedLetters';
import {SET_MISSED_LETTERS, RESET_MISSED_LETTERS} from '../reducers/actionTypes';
import hangedmanParts from '../../../config/hangedmanParts';


describe("Handling missed letters reducer", () => {
  it("Pressed key should be pushed to missedLetters array", () => {
    expect(
      setMissedLetters(
        initialMissedLettersState,
        {
          lettersProps: {
            word:[
              {letter:'A', visible:false},
              {letter:'B', visible:false}
            ],
            pressedKey: 'C',
            missedLetters: [],
            hangedman: hangedmanParts
          },
          type: SET_MISSED_LETTERS
        }
      ).missedLetters
    ).toEqual(['C'])
  });


  it("After reseting missedLetters, missedLetters array shoulb be empty, it's length should be equal 0", () => {
    expect(
      setMissedLetters(
        initialMissedLettersState,
        {
          type:RESET_MISSED_LETTERS
        }
      ).missedLetters
    ).toEqual([])
  });
})
