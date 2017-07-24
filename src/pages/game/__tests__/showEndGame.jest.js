import setEndGameState from '../reducers/showEndGame';
import {initialEndGameState, messageWon, messageLost} from '../reducers/showEndGame';
import {SET_MESSAGE, SHOW_END_GAME} from '../reducers/actionTypes';

describe("Testing End game screen configuration", () => {
  it("Type of showEndGame should be boolean", () => {
    expect(
      typeof setEndGameState(
        initialEndGameState,
        {showEndGame:{
          won: false,
          lost: false
        },
        type: SHOW_END_GAME}
      ).showEndGame
    ).toEqual("boolean");
  });

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
});

describe("Testing message value depending on winning status", () => {
  it("Game should be running (showEndGame=false) and message type should be string", () => {
    expect(
      typeof setEndGameState(
        initialEndGameState,
        {
          showEndGame:{
            won: false,
            lost: false
          },
          type: SET_MESSAGE
        }
      ).message
    ).toEqual("string");
  });

  it("Game should be running (showEndGame=false) and message length should be equal to 0", () => {
    expect(
      setEndGameState(
        initialEndGameState,
        {
          showEndGame:{
            won: false,
            lost: false
          },
          type: SET_MESSAGE
        }
      ).message.length
    ).toEqual(0);
  });

  it("Game should be lost (showEndGame.lost=true) and message value should be equal to \"" + messageLost + "\"", () => {
    expect(
      setEndGameState(
        initialEndGameState,
        {
          showEndGame:{
            won: false,
            lost: true
          },
          type: SET_MESSAGE
        }
      ).message
    ).toEqual(messageLost);
  });

  it("Game should be won (showEndGame.won=true) and message value should be equal to \"" + messageWon + "\"", () => {
    expect(
      setEndGameState(
        initialEndGameState,
        {
          showEndGame:{
            won: true,
            lost: false
          },
          type: SET_MESSAGE
        }
      ).message
    ).toEqual(messageWon);
  });
});
