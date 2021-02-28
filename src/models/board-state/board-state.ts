// These types are meant to be compatible with the board state Go
// structs in Battlesnake's official rules implementation. That's why
// properties are capitalized, which isn't a JavaScript convention--it's
// a Go convention. That's also the reason for conventions such as empty
// strings instead of null/undefined for snake eliminations. It's clearer
// to match structures exactly.
//
// https://github.com/BattlesnakeOfficial/rules

export interface BoardState {
  Height: number;
  Width: number;
  Food: Point[];
  Snakes: Snake[];
}

export interface Point {
  X: number;
  Y: number;
}

export interface Snake {
  ID: string;
  Body: Point[];
  Health: number;
  EliminatedCause: EliminatedCause;
  EliminatedBy: SnakeID;
}

export type SnakeID = string;

export type EliminatedCause = "" | "snake-collision" | "snake-self-collision" | "out-of-health" | "head-collision" | "wall-collision";

export function snakeIsEliminated({EliminatedCause}: Snake): boolean {
  return EliminatedCause !== "";
}

export function snakeIsUneliminated({EliminatedCause}: Snake): boolean {
  return EliminatedCause === "";
}