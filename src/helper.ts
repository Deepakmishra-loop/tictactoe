export const EMPTY = "-";
export const X = "X";
export const O = "O";

export type BoardValue = "-" | "X" | "O";

export const index: Record<string, number> = {
  "top-left": 0,
  "top-center": 1,
  "top-right": 2,
  "middle-left": 3,
  "middle-center": 4,
  "middle-right": 5,
  "bottom-left": 6,
  "bottom-center": 7,
  "bottom-right": 8,
};

export function player(board: BoardValue[]) {
  let x = 0;
  let o = 0;

  for (const value of board) {
    if (value === X) {
      x += 1;
    } else if (value === O) {
      o += 1;
    }
  }

  if (x > o) {
    return O;
  } else {
    return X;
  }
}

export function won(board: BoardValue[]) {
  let found = false;
  // Check row
  for (let i = 0; i < 3; i++) {
    found = true;
    for (let j = i * 3; j < i * 3 + 3; j++) {
      if (board[i * 3] !== board[j]) {
        found = false;
      }
    }

    if (found && board[i * 3] !== EMPTY) {
      if (board[i * 3] === X) return 1;
      else return -1;
    }
  }

  // Check column
  for (let i = 0; i < 3; i++) {
    found = true;
    for (let j = 0; j < 9; j += 3) {
      if (board[i] !== board[i + j]) {
        found = false;
      }
    }

    if (found && board[i] !== EMPTY) {
      if (board[i] === X) return 1;
      else return -1;
    }
  }

  // Check diagonal
  found = true;
  for (let i = 0, j = 0; i < 3 && j < 3; i++, j++) {
    if (board[0] !== board[i * 3 + j]) {
      found = false;
    }
  }

  if (found && board[0] !== EMPTY) {
    if (board[0] === X) return 1;
    else return -1;
  }

  found = true;
  for (let i = 0, j = 2; i < 3 && j >= 0; i++, j--) {
    if (board[2] !== board[i * 3 + j]) {
      found = false;
    }
  }

  if (found && board[2] !== EMPTY) {
    if (board[2] === X) return 1;
    else return -1;
  }

  // Empty space available
  for (let i = 0; i < 9; i++) {
    if (board[i] === EMPTY) {
      return null;
    }
  }

  // Draw
  return 0;
}

export function actions(board: BoardValue[]) {
  let actionList: number[] = [];

  for (let i = 0; i < 9; i++) {
    if (board[i] === EMPTY) {
      actionList.push(i);
    }
  }

  return actionList;
}

export function result(board: BoardValue[], move: number) {
  board[move] = player(board);

  return board;
}

function max_value(board: BoardValue[]) {
  let available = actions(board);

  let maximum = [-2, available[0]];

  for (const mv of available) {
    let res = result([...board], mv);
    let terminate = won(res);

    if (terminate !== null) {
      if (terminate > maximum[0]) {
        maximum = [terminate, mv];
      }
    } else {
      let [val, move] = min_val(result([...board], mv));

      if (val > maximum[0]) {
        maximum = [val, mv];
      }
    }
  }

  return maximum;
}

function min_val(board: BoardValue[]) {
  let available = actions(board);

  let minimum = [2, available[0]];
  
  for (const mv of available) {
    let res = result([...board], mv);
    let terminate = won(res);

    if (terminate !== null) {
      if (terminate < minimum[0]) {
        minimum = [terminate, mv];
      }
    } else {
      let [val, move] = max_value(result([...board], mv));

      if (val < minimum[0]) {
        minimum = [val, mv];
      }
    }
  }

  return minimum;
}

export function optimalMove(board: BoardValue[]): number {

  let move = min_val([...board])[1];

  return move;
}
