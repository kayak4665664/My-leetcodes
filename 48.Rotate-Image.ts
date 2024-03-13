function rotate(matrix: number[][]): void {
  let n = matrix.length;
  let m: number[][] = new Array(n).fill(undefined).map(
    () => new Array(n).fill(undefined)
  );
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      m[i][j] = matrix[n - 1 - j][i];
    }
  }
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      matrix[i][j] = m[i][j];
    }
  }
};