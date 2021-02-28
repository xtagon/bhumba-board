
// This is an array of board states, one board state per turn of an example
// game. This is meant to be used in tests, which means if you change this
// data, tests should break, so take care.
export const EXAMPLE_GAME = [
  {
    Height: 11,
    Width: 11,
    Food: [
      { X: 8, Y: 2 },
      { X: 0, Y: 8 },
      { X: 4, Y: 8 },
      { X: 8, Y: 4 },
      { X: 5, Y: 5 },
    ],
    Snakes: [
      {
        ID: 'p1',
        Body: [
          { X: 9, Y: 1 },
          { X: 9, Y: 1 },
          { X: 9, Y: 1 },
        ],
        Health: 100,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p2',
        Body: [
          { X: 1, Y: 9 },
          { X: 1, Y: 9 },
          { X: 1, Y: 9 },
        ],
        Health: 100,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p3',
        Body: [
          { X: 5, Y: 9 },
          { X: 5, Y: 9 },
          { X: 5, Y: 9 },
        ],
        Health: 100,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p4',
        Body: [
          { X: 9, Y: 5 },
          { X: 9, Y: 5 },
          { X: 9, Y: 5 },
        ],
        Health: 100,
        EliminatedCause: '',
        EliminatedBy: '',
      },
    ],
  },
  {
    Height: 11,
    Width: 11,
    Food: [
      { X: 8, Y: 2 },
      { X: 0, Y: 8 },
      { X: 4, Y: 8 },
      { X: 8, Y: 4 },
      { X: 5, Y: 5 },
    ],
    Snakes: [
      {
        ID: 'p1',
        Body: [
          { X: 10, Y: 1 },
          { X: 9, Y: 1 },
          { X: 9, Y: 1 },
        ],
        Health: 99,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p2',
        Body: [
          { X: 1, Y: 10 },
          { X: 1, Y: 9 },
          { X: 1, Y: 9 },
        ],
        Health: 99,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p3',
        Body: [
          { X: 4, Y: 9 },
          { X: 5, Y: 9 },
          { X: 5, Y: 9 },
        ],
        Health: 99,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p4',
        Body: [
          { X: 10, Y: 5 },
          { X: 9, Y: 5 },
          { X: 9, Y: 5 },
        ],
        Health: 99,
        EliminatedCause: '',
        EliminatedBy: '',
      },
    ],
  },
  {
    Height: 11,
    Width: 11,
    Food: [
      { X: 8, Y: 2 },
      { X: 0, Y: 8 },
      { X: 4, Y: 8 },
      { X: 8, Y: 4 },
      { X: 5, Y: 5 },
    ],
    Snakes: [
      {
        ID: 'p1',
        Body: [
          { X: 10, Y: 0 },
          { X: 10, Y: 1 },
          { X: 9, Y: 1 },
        ],
        Health: 98,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p2',
        Body: [
          { X: 1, Y: 11 },
          { X: 1, Y: 10 },
          { X: 1, Y: 9 },
        ],
        Health: 98,
        EliminatedCause: 'wall-collision',
        EliminatedBy: '',
      },
      {
        ID: 'p3',
        Body: [
          { X: 3, Y: 9 },
          { X: 4, Y: 9 },
          { X: 5, Y: 9 },
        ],
        Health: 98,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p4',
        Body: [
          { X: 11, Y: 5 },
          { X: 10, Y: 5 },
          { X: 9, Y: 5 },
        ],
        Health: 98,
        EliminatedCause: 'wall-collision',
        EliminatedBy: '',
      },
    ],
  },
  {
    Height: 11,
    Width: 11,
    Food: [
      { X: 8, Y: 2 },
      { X: 0, Y: 8 },
      { X: 4, Y: 8 },
      { X: 8, Y: 4 },
      { X: 5, Y: 5 },
    ],
    Snakes: [
      {
        ID: 'p1',
        Body: [
          { X: 9, Y: 0 },
          { X: 10, Y: 0 },
          { X: 10, Y: 1 },
        ],
        Health: 97,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p2',
        Body: [
          { X: 1, Y: 11 },
          { X: 1, Y: 10 },
          { X: 1, Y: 9 },
        ],
        Health: 98,
        EliminatedCause: 'wall-collision',
        EliminatedBy: '',
      },
      {
        ID: 'p3',
        Body: [
          { X: 2, Y: 9 },
          { X: 3, Y: 9 },
          { X: 4, Y: 9 },
        ],
        Health: 97,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p4',
        Body: [
          { X: 11, Y: 5 },
          { X: 10, Y: 5 },
          { X: 9, Y: 5 },
        ],
        Health: 98,
        EliminatedCause: 'wall-collision',
        EliminatedBy: '',
      },
    ],
  },
  {
    Height: 11,
    Width: 11,
    Food: [
      { X: 8, Y: 2 },
      { X: 0, Y: 8 },
      { X: 4, Y: 8 },
      { X: 8, Y: 4 },
      { X: 5, Y: 5 },
    ],
    Snakes: [
      {
        ID: 'p1',
        Body: [
          { X: 9, Y: 1 },
          { X: 9, Y: 0 },
          { X: 10, Y: 0 },
        ],
        Health: 96,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p2',
        Body: [
          { X: 1, Y: 11 },
          { X: 1, Y: 10 },
          { X: 1, Y: 9 },
        ],
        Health: 98,
        EliminatedCause: 'wall-collision',
        EliminatedBy: '',
      },
      {
        ID: 'p3',
        Body: [
          { X: 1, Y: 9 },
          { X: 2, Y: 9 },
          { X: 3, Y: 9 },
        ],
        Health: 96,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p4',
        Body: [
          { X: 11, Y: 5 },
          { X: 10, Y: 5 },
          { X: 9, Y: 5 },
        ],
        Health: 98,
        EliminatedCause: 'wall-collision',
        EliminatedBy: '',
      },
    ],
  },
  {
    Height: 11,
    Width: 11,
    Food: [
      { X: 8, Y: 2 },
      { X: 0, Y: 8 },
      { X: 4, Y: 8 },
      { X: 8, Y: 4 },
      { X: 5, Y: 5 },
    ],
    Snakes: [
      {
        ID: 'p1',
        Body: [
          { X: 10, Y: 1 },
          { X: 9, Y: 1 },
          { X: 9, Y: 0 },
        ],
        Health: 95,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p2',
        Body: [
          { X: 1, Y: 11 },
          { X: 1, Y: 10 },
          { X: 1, Y: 9 },
        ],
        Health: 98,
        EliminatedCause: 'wall-collision',
        EliminatedBy: '',
      },
      {
        ID: 'p3',
        Body: [
          { X: 0, Y: 9 },
          { X: 1, Y: 9 },
          { X: 2, Y: 9 },
        ],
        Health: 95,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p4',
        Body: [
          { X: 11, Y: 5 },
          { X: 10, Y: 5 },
          { X: 9, Y: 5 },
        ],
        Health: 98,
        EliminatedCause: 'wall-collision',
        EliminatedBy: '',
      },
    ],
  },
  {
    Height: 11,
    Width: 11,
    Food: [
      { X: 8, Y: 2 },
      { X: 0, Y: 8 },
      { X: 4, Y: 8 },
      { X: 8, Y: 4 },
      { X: 5, Y: 5 },
    ],
    Snakes: [
      {
        ID: 'p1',
        Body: [
          { X: 10, Y: 1 },
          { X: 9, Y: 1 },
          { X: 9, Y: 0 },
        ],
        Health: 95,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p2',
        Body: [
          { X: 1, Y: 11 },
          { X: 1, Y: 10 },
          { X: 1, Y: 9 },
        ],
        Health: 98,
        EliminatedCause: 'wall-collision',
        EliminatedBy: '',
      },
      {
        ID: 'p3',
        Body: [
          { X: 0, Y: 9 },
          { X: 1, Y: 9 },
          { X: 2, Y: 9 },
        ],
        Health: 95,
        EliminatedCause: '',
        EliminatedBy: '',
      },
      {
        ID: 'p4',
        Body: [
          { X: 11, Y: 5 },
          { X: 10, Y: 5 },
          { X: 9, Y: 5 },
        ],
        Health: 98,
        EliminatedCause: 'wall-collision',
        EliminatedBy: '',
      },
    ],
  },
];