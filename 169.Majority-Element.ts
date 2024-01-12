function majorityElement(nums: number[]): number {
  let res = 0, cnt = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (cnt === 0) {
      res = nums[i];
      ++cnt;
    } else if (nums[i] === res) ++cnt
    else --cnt;
  }
  return res;
};