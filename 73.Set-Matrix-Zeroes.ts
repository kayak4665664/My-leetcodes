function setZeroes(matrix: number[][]): void {
  let rows = matrix.length, columns = matrix[0].length;
  let set: Set<number> = new Set();
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      if (matrix[i][j] === 0 && !set.has(i * columns + j)) {
        for (let x = 0; x < rows; ++x) {
          if (matrix[x][j] !== 0) {
            matrix[x][j] = 0;
            set.add(x * columns + j);
          }
        }
        for (let y = 0; y < columns; ++y) {
          if (matrix[i][y] !== 0) {
            matrix[i][y] = 0;
            set.add(i * columns + y);
          }
        }
      }
    }
  }
};