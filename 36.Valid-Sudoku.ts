function isValidSudoku(board: string[][]): boolean {
  let rows: Map<string, number>[] = [], cols: Map<string, number>[] = [], boxes: Map<string, number>[] = [];
  for (let i = 0; i < 9; i++) {
    rows[i] = new Map();
    cols[i] = new Map();
    boxes[i] = new Map();
  }

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      let s = board[i][j];
      if (s === ".") continue;
      if (rows[i].has(s)) return false;
      else rows[i].set(s, 1);
      if (cols[j].has(s)) return false;
      else cols[j].set(s, 1);
      let k = Math.trunc(i / 3) * 3 + Math.trunc(j / 3);
      if (boxes[k].has(s)) return false;
      else boxes[k].set(s, 1);
    }
  }

  return true;
};