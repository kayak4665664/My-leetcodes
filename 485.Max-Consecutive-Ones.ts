const findMaxConsecutiveOnes = (nums: number[]): number => {
  let res = 0, len = 0, end = nums.length;
  for (let i = 0; i < end; ++i) {
    if (nums[i] == 1) ++len;
    else {
      res = Math.max(res, len);
      len = 0;
    }
  }
  res = Math.max(res, len);
  return res;
};