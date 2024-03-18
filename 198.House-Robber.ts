function rob(nums: number[]): number {
  let dp: number[] = [];
  let len = nums.length;
  if (len === 1) return nums[0];

  dp[0] = nums[0];
  dp[1] = Math.max(dp[0], nums[1]);

  for (let i = 2; i < len; ++i) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[len - 1];
};