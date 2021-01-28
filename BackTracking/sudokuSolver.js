let sudoku = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

let line = new Array(9).fill(0).map(() => new Array(9).fill(false));
let column = new Array(9).fill(0).map(() => new Array(9).fill(false));
let block = new Array(3)
  .fill(0)
  .map(() => new Array(3).fill(0).map(() => new Array(9).fill(false)));
let valid = false;
let spaces = [];

const solveSudoku = board => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        spaces.push([i, j]);
      } else {
        let digit = parseInt(board[i][j]) - 1;
        line[i][digit] = true;
        column[j][digit] = true;
        block[Math.floor(i / 3)][Math.floor(j / 3)][digit] = true;
      }
    }
  }
  dfs(board, 0);
};

const dfs = (board, pos) => {
  if (pos === spaces.length) {
    valid = true;
    return;
  }
  let space = spaces[pos];
  let i = space[0];
  let j = space[1];
  for (let digit = 0; digit < 9 && !valid; digit++) {
    if (
      !line[i][digit] &&
      !column[j][digit] &&
      !block[Math.floor(i / 3)][Math.floor(j / 3)][digit]
    ) {
      line[i][digit] = true;
      column[j][digit] = true;
      block[Math.floor(i / 3)][Math.floor(j / 3)][digit] = true;
      board[i][j] = (digit + 1).toString();
      dfs(board, pos + 1);
      line[i][digit] = false;
      column[j][digit] = false;
      block[Math.floor(i / 3)][Math.floor(j / 3)][digit] = false;
    }
  }
};

solveSudoku(sudoku);

console.log(sudoku);
