import { newE2EPage } from '@stencil/core/testing';
import { EXAMPLE_GAME } from '../../../models/board-state/test/fixtures';

// These end-to-end tests are pretty bare. To be honest, it's been much easier
// just to test it visually/manually. But it's still good to have some basic
// end-to-end cases just as a smoke test.

describe('bhumba-board', () => {
  it('renders when not given a board state', async () => {
    const page = await newE2EPage();
    await page.setContent('<bhumba-board></bhumba-board>');

    const element = await page.find('bhumba-board');

    expect(element).toHaveClass('hydrated');

    const svg = await page.find('bhumba-board >>> svg');

    expect(svg).not.toBeNull();
    expect(svg.getAttribute("viewBox")).toEqual("0 0 1 1");
  });

  it('renders when given board state', async () => {
    const page = await newE2EPage();
    await page.setContent(`<bhumba-board></bhumba-board>`);

    const element = await page.find('bhumba-board');

    element.setProperty("boardState", EXAMPLE_GAME[0]);

    await page.waitForChanges();

    expect(element).toHaveClass('hydrated');

    const svg = await page.find('bhumba-board >>> svg');

    expect(svg).not.toBeNull();
    expect(svg.getAttribute("viewBox")).toEqual("0 0 11 11");
  });
});
