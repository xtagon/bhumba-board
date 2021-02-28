import { Snake, snakeIsEliminated, snakeIsUneliminated } from "../board-state";

describe('board-state', () => {
  it('exports helpers for determining whether a snake in the board state is eliminiated', async () => {
    const uneliminatedSnake: Snake = {
      ID: "snek",
      Body: [{X: 0, Y: 0}, {X: 1, Y: 0}, {X: 1, Y: 1}],
      Health: 98,
      EliminatedCause: "",
      EliminatedBy: ""
    }

    const eliminiatedSnake: Snake = {
      ID: "snek",
      Body: [{X: 1, Y: -1}, {X: 1, Y: 0}, {X: 1, Y: 1}],
      Health: 98,
      EliminatedCause: "wall-collision",
      EliminatedBy: ""
    }

    expect(snakeIsEliminated(uneliminatedSnake)).toEqual(false);
    expect(snakeIsUneliminated(uneliminatedSnake)).toEqual(true);

    expect(snakeIsEliminated(eliminiatedSnake)).toEqual(true);
    expect(snakeIsUneliminated(eliminiatedSnake)).toEqual(false);
  });
});
