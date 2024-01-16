function maxSubArray(nums: number[]): number {
  let dp = [];
  let len = nums.length;
  let res = nums[0];
  dp[0] = nums[0];
  for (let i = 1; i < len; ++i) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    if (dp[i] > res) res = dp[i];
  }
  return res;
};