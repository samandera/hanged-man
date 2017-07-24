import setWord from '../reducers/setWord';
import {SET_WORD, SET_WINNING_LETTERS} from '../reducers/actionTypes';

describe("Handling word and winning letters reducer", () => {
  const initialWordState = {
    word: []
  };

  const wordState = [
      {letter:'a', visible:false},
      {letter:'b', visible:false},
      {letter:'c', visible:false},
      {letter:'a', visible:false}
    ]

  it("Passed string should be equal an array of objects with keys letter (string) and visible (boolean false)",
    () => {
      expect(
        setWord(
          initialWordState,
          {
            type:SET_WORD,
            word:'abca'
          }
        ).word
      ).toEqual(wordState)
    });

  it("Passing pressedKey:'A' should change word's state's each siblings of key 'letter' of a value 'A', 'visible', into value boolean true", () => {
    expect(
      setWord(
        initialWordState,
        {
          wordProps: {
            word:wordState,
            pressedKey: 'A'
          },
          type: SET_WINNING_LETTERS
        }
      ).word
    ).toEqual(
      [
        {letter:'a', visible:true},
        {letter:'b', visible:false},
        {letter:'c', visible:false},
        {letter:'a', visible:true}
      ]
    )
  })
});
