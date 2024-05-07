/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let dp = [];
  for (let i = 0; i < triangle.length; ++i) {
    dp.push(Array(triangle[i].length).fill(Infinity));
  }

  dp[0][0] = triangle[0][0];

  for (let i = 1; i < triangle.length; ++i) {
    for (let j = 0; j < triangle[i].length; ++j) {
      if (j === triangle[i].length - 1) dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      else if (j === 0) dp[i][j] = dp[i - 1][j] + triangle[i][j];
      else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }

  let res = Infinity;
  for (let i = 0; i < dp[dp.length - 1].length; ++i) {
    res = Math.min(res, dp[dp.length - 1][i]);
  }
  return res;
};