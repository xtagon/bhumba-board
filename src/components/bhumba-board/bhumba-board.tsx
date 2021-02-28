import { Component, Host, h, Prop } from '@stencil/core';
import { BoardState, Point, snakeIsUneliminated } from '../../models/board-state/board-state';

@Component({
  tag: 'bhumba-board',
  shadow: true
})
export class BhumbaBoard {
  /** The board state to render */
  @Prop() boardState: BoardState;

  boardWidth() {
    return this.boardState?.Width || 1;
  }

  boardHeight() {
    return this.boardState?.Height || 1;
  }

  viewBox() {
    return `0 0 ${this.boardWidth()} ${this.boardHeight()}`
  }

  food() {
    return this.boardState?.Food || [];
  }

  foodToRender() {
    return this.food().map(point => this.flipY(point));
  }

  snakes() {
    return this.boardState?.Snakes || [];
  }

  snakesToRender() {
    return this.snakes().filter(snakeIsUneliminated);
  }

  bodypartsToRender() {
    return this.snakesToRender().
      reduce((points, snake) => points.concat(snake.Body), []).
      map(point => this.flipY(point));
  }

  pathsToRender() {
    return this.snakesToRender().map(snake => {
      return snake.Body.reverse().map(point => this.flipY(point));
    })
  }

  // Converts a path (e.g a snake body or some other array of points) to an SVG
  // path command. Note that the capital M and L mean these are absolute and
  // not relative coordinates.
  pathToSvgCommand(path: Point[]) {
    return "M " + path.map(({X, Y}) => `${X} ${Y}`).join(" L ");
  }

  // The Y coords in BoardState are inverted compared to SVG coords as of
  // Battlesnake API v1. This helper flips a point for rendering purposes.
  flipY(point: Point) {
    return {...point, Y: this.boardHeight() - 1 - point.Y};
  }

  render() {
    return (
      <Host>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100%"
          viewBox={this.viewBox()}
        >
          <defs>
            <pattern
              id="grid"
              width="1"
              height="1"
              x="-0.02"
              y="-0.02"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 1 0 L 0 0 0 1"
                fill="transparent"
                stroke="lightgrey"
                stroke-width="0.08"
              />
            </pattern>

            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="5"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" />
            </marker>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />

          {this.pathsToRender().map(path =>
            <path
              d={this.pathToSvgCommand(path)}
              transform="translate(0.5, 0.5)"
              fill="transparent"
              stroke="black"
              stroke-width="0.04"
              marker-end="url(#arrowhead)"
            />
          )}

          {this.bodypartsToRender().map(({X, Y}) =>
            <svg x={X} y={Y} width="1" height="1" viewBox="0 0 120 120">
              <rect
                x="15"
                y="15"
                width="90"
                height="90"
                rx="20"
                fill="transparent"
                stroke="black"
                stroke-width="4"
              />
            </svg>
          )}

          {this.foodToRender().map(({X, Y}) =>
            <svg x={X} y={Y} width="1" height="1" viewBox="0 0 120 120">
              <circle cx="50%" cy="50%" r="19%" />
            </svg>
          )}
        </svg>
      </Host>
    );
  }
}