function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0, sum = 0, len = nums.length, res = Infinity;
  for (let right = 0; right < len; ++right) {
    sum += nums[right];
    while (sum >= target) {
      res = Math.min(res, right - left + 1);
      sum -= nums[left];
      left += 1;
    }
  }
  if (res === Infinity) return 0;
  else return res;
};