function singleNumber(nums: number[]): number {
  let res = 0;
  for (let num of nums) res ^= num;
  return res;
};