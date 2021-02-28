import { newSpecPage } from '@stencil/core/testing';
import { EXAMPLE_GAME } from '../../../models/board-state/test/fixtures';
import { BhumbaBoard } from '../bhumba-board';

describe('bhumba-board', () => {
  it('prepares to render an empty board when no board state is provided', async () => {
    const page = await newSpecPage({
      components: [BhumbaBoard],
      html: `<bhumba-board></bhumba-board>`,
    });

    const instance = page.rootInstance;

    expect(instance.boardWidth()).toEqual(1);
    expect(instance.boardHeight()).toEqual(1);
    expect(instance.viewBox()).toEqual('0 0 1 1');
    expect(instance.foodToRender()).toEqual([]);
    expect(instance.snakesToRender()).toEqual([]);
    expect(instance.bodypartsToRender()).toEqual([]);
    expect(instance.pathsToRender()).toEqual([]);
  });

  it("prepares to render food and snakes when a board state is provided", async () => {
    const page = await newSpecPage({
      components: [BhumbaBoard],
      html: `<bhumba-board></bhumba-board>`,
    });

    page.root.boardState = EXAMPLE_GAME[0];

    const instance = page.rootInstance;

    expect(instance.boardWidth()).toEqual(11);
    expect(instance.boardHeight()).toEqual(11);
    expect(instance.viewBox()).toEqual('0 0 11 11');
    expect(instance.foodToRender().length).toBeGreaterThan(0);
    expect(instance.snakesToRender().length).toBeGreaterThan(0);
    expect(instance.bodypartsToRender().length).toBeGreaterThan(0);
    expect(instance.pathsToRender().length).toBeGreaterThan(0);
    expect(instance.pathsToRender().length).toEqual(instance.snakesToRender().length);
  });
});
