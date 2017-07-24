import {setEndGameState} from '../reducers/showEndGame';
import {SET_MESSAGE, SHOW_END_GAME} from '../reducers/actionTypes';

const initialEndGameState = {
  message:"",
  showEndGame: false
}

describe("Testing End game screen configuration", () => {
  it("End Game screen shouldn't display (showEndGame state = false), and passed arguments, endGameStatus.won and endGameStatus.lost should be set to false", () => {
    expect(
      setEndGameState(
        initialEndGameState,
        {showEndGame:{
          won: false,
          lost: false
        },
        type: SHOW_END_GAME}
      ).showEndGame
    ).toEqual(false);
  });

  it("End Game screen should display (showEndGame state = true) while endGameStatus.won is set to true and endGameStatus.lost is set to false", () => {
    expect(
      setEndGameState(
        initialEndGameState,
        {
          showEndGame:{
            won: true,
            lost: false
          },
          type: SHOW_END_GAME
        }
      ).showEndGame
    ).toEqual(true);
  });

  it("End Game screen should display (showEndGame state = true) while endGameStatus.won is set to false and endGameStatus.lost is set to trues", () => {
    expect(
      setEndGameState(
        initialEndGameState,
        {
          showEndGame:{
            won: false,
            lost: true
          },
          type: SHOW_END_GAME
        }
      ).showEndGame
    ).toEqual(true);
  });
})
