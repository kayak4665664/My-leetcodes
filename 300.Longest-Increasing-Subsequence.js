/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 1) return 1;

  let dp = Array(nums.length).fill(1);

  dp[dp.length - 1] = 1;

  let res = 0;

  for (let i = dp.length - 2; i >= 0; --i) {
    let max = 0;
    for (let j = i + 1; j < dp.length; ++j) {
      if (nums[j] > nums[i]) {
        if (dp[j] + 1 > max) max = dp[j] + 1;
      }
    }
    dp[i] = Math.max(max, dp[i]);

    res = Math.max(res, dp[i]);
  }

  return res;
};