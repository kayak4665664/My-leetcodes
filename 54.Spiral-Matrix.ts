function spiralOrder(matrix: number[][]): number[] {
  let sum = matrix.length * matrix[0].length;
  let cnt = 0;
  let i = 0, j = 0;
  let res = [];
  let right = true, down = false, left = false, up = false;
  while (true) {
    res.push(matrix[i][j]);
    ++cnt;
    matrix[i][j] = Infinity;
    if (cnt >= sum) break;
    if (right) {
      if (j + 1 < matrix[0].length && matrix[i][j + 1] <= 100) {
        j += 1;
        continue;
      } else {
        right = false;
        down = true;
      }
    }
    if (down) {
      if (i + 1 < matrix.length && matrix[i + 1][j] <= 100) {
        i += 1;
        continue;
      } else {
        down = false;
        left = true;
      }
    }
    if (left) {
      if (j - 1 >= 0 && matrix[i][j - 1] <= 100) {
        j -= 1;
        continue;
      } else {
        left = false;
        up = true;
      }
    }
    if (up) {
      if (i - 1 >= 0 && matrix[i - 1][j] <= 100) {
        i -= 1;
        continue;
      } else {
        up = false;
        right = true;
      }
    }
    if (right) {
      if (j + 1 < matrix[0].length && matrix[i][j + 1] <= 100) {
        j += 1;
        continue;
      } else {
        right = false;
        down = true;
      }
    }
  }
  return res;
};