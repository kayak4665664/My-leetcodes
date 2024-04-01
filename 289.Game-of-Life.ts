function gameOfLife(board: number[][]): void {
  let row = board.length, column = board[0].length;
  let newBoard: number[][] = new Array(row).fill(undefined).map(
    () => new Array(column).fill(undefined)
  );
  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < column; ++j) {
      let n = 0;
      if (i - 1 >= 0 && board[i - 1][j] === 1) ++n;
      if (i + 1 < row && board[i + 1][j] === 1) ++n;
      if (j - 1 >= 0 && board[i][j - 1] === 1) ++n;
      if (j + 1 < column && board[i][j + 1] === 1) ++n;
      if (i - 1 >= 0 && j - 1 >= 0 && board[i - 1][j - 1] === 1) ++n;
      if (i - 1 >= 0 && j + 1 < column && board[i - 1][j + 1] === 1) ++n;
      if (i + 1 < row && j - 1 >= 0 && board[i + 1][j - 1] === 1) ++n;
      if (i + 1 < row && j + 1 < column && board[i + 1][j + 1] === 1) ++n;
      if (board[i][j] === 1) {
        if (n < 2 || n > 3) newBoard[i][j] = 0;
        else newBoard[i][j] = 1;
      } else {
        if (n === 3) newBoard[i][j] = 1;
        else newBoard[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < column; ++j) {
      board[i][j] = newBoard[i][j];
    }
  }
};