/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let res = [0, 1, 1];
  if (n < 3) return res[n];
  else {
    for (let i = 3; i <= n; ++i) {
      res[i] = res[i - 3] + res[i - 2] + res[i - 1];
    }
  }
  return res[n];
};