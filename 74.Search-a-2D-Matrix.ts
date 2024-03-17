
function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length, n = matrix[0].length;
  let up = 0, down = m, left = 0, right = n;
  let row = -1;

  while (up < down) {
    let mid = Math.trunc((up + down) / 2);
    if (matrix[mid][0] === target) return true;
    else if (matrix[mid][0] < target) {
      if (mid + 1 >= m) {
        row = mid;
        break;
      }
      else if (matrix[mid + 1][0] >= target) {
        if (matrix[mid + 1][0] === target) return true;
        row = mid;
        break;
      } else up = mid + 1;
    } else {
      if (mid - 1 < 0) return false;
      else if (matrix[mid - 1][0] <= target) {
        if (matrix[mid - 1][0] === target) return true;
        row = mid - 1;
        break;
      } else down = mid;
    }
  }

  if (row === -1) return false;

  while (left < right) {
    let mid = Math.trunc((left + right) / 2);
    if (matrix[row][mid] === target) return true;
    else if (matrix[row][mid] < target) left = mid + 1;
    else right = mid;
  }


  return false;
};