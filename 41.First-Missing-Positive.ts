function firstMissingPositive(nums: number[]): number {
  let len = nums.length;

  for (let i = 0; i < len; ++i) {
    while (nums[i] > 0 && nums[i] < len && i !== nums[i] - 1) {
      let index = nums[i] - 1;
      let num = nums[index];
      if (num === nums[i]) break;
      nums[index] = nums[i];
      nums[i] = num;
    }
  }
  for (let i = 0; i < len; ++i) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return nums[len - 1] + 1;
};