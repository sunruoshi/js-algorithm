function solveNQueens(n) {
  let queen = new Array(n).fill(-1);
  let col = new Set(),
    x1 = new Set(),
    x2 = new Set();
  let ans = [];
  const newBoard = function () {
    let board = [];
    for (let i = 0; i < n; i++) {
      let newRow = new Array(n).fill(".");
      newRow[queen[i]] = "Q";
      board.push(newRow);
    }
    return board;
  };
  const findSolution = function (row) {
    if (row === n) {
      ans.push(newBoard());
      return;
    }
    for (let i = 0; i < n; i++) {
      if (col.has(i)) continue;
      if (x1.has(row - i)) continue;
      if (x2.has(row + i)) continue;
      queen[row] = i;
      col.add(i);
      x1.add(row - i);
      x2.add(row + i);
      findSolution(row + 1);
      x2.delete(row + i);
      x1.delete(row - i);
      col.delete(i);
      queen[row] = -1;
    }
  };
  findSolution(0);
  return ans;
}

console.log(solveNQueens(4));
