
let s = new Set();

function dfs(i: number, j: number, m: number, n: number, grid: string[][]): void {
  s.add(i * n + j);
  if (i - 1 >= 0 && grid[i - 1][j] === "1" && !s.has((i - 1) * n + j)) dfs(i - 1, j, m, n, grid);
  if (i + 1 < m && grid[i + 1][j] === "1" && !s.has((i + 1) * n + j)) dfs(i + 1, j, m, n, grid);
  if (j - 1 >= 0 && grid[i][j - 1] === "1" && !s.has(i * n + (j - 1))) dfs(i, j - 1, m, n, grid);
  if (j + 1 < n && grid[i][j + 1] === "1" && !s.has(i * n + (j + 1))) dfs(i, j + 1, m, n, grid);
}

function numIslands(grid: string[][]): number {
  s = new Set();
  let res = 0;
  let m = grid.length, n = grid[0].length;

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === "1" && !s.has(i * n + j)) {
        dfs(i, j, m, n, grid);
        ++res;
      }
    }
  }
  return res;
};
