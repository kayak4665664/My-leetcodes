let set: Set<string> = new Set();

function dfs(x: number, y: number, m: number, n: number, board: string[][]): void {
  set.add(`${x},${y}`);
  if (x + 1 <= m - 1 && board[x + 1][y] === 'O' && !set.has(`${x + 1},${y}`)) dfs(x + 1, y, m, n, board);
  if (x - 1 >= 0 && board[x - 1][y] === 'O' && !set.has(`${x - 1},${y}`)) dfs(x - 1, y, m, n, board);
  if (y + 1 <= n - 1 && board[x][y + 1] === 'O' && !set.has(`${x},${y + 1}`)) dfs(x, y + 1, m, n, board);
  if (y - 1 >= 0 && board[x][y - 1] === 'O' && !set.has(`${x},${y - 1}`)) dfs(x, y - 1, m, n, board);
}


function solve(board: string[][]): void {
  set.clear();

  let m = board.length, n = board[0].length;

  for (let i = 0; i < m; ++i) {
    if (board[i][0] === 'O') dfs(i, 0, m, n, board);
    if (board[i][n - 1] === 'O') dfs(i, n - 1, m, n, board);
  }
  for (let i = 0; i < n; ++i) {
    if (board[0][i] === 'O') dfs(0, i, m, n, board);
    if (board[m - 1][i] === 'O') dfs(m - 1, i, m, n, board);
  }
  for (let i = 1; i < m - 1; ++i) {
    for (let j = 1; j < n - 1; ++j) {
      if (board[i][j] === 'O' && !set.has(`${i},${j}`)) board[i][j] = 'X';
    }
  }
};