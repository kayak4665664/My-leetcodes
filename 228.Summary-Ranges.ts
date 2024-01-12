function summaryRanges(nums: number[]): string[] {
  let res = [];
  let left = 0, right = 0, len = nums.length;
  while (left < len && right < len) {
    ++right;
    if (right >= len || nums[right] - nums[left] > right - left) {
      if (right - 1 === left) res.push(nums[left].toString());
      else res.push(nums[left].toString() + "->" + nums[right - 1].toString());
      left = right;
    }
  }

  return res;
};