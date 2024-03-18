function singleNumber(nums: number[]): number {
  let once = 0, twice = 0;
  for (let i = 0; i < nums.length; ++i) {
    once = ~twice & (once ^ nums[i]);
    twice = ~once & (twice ^ nums[i]);
  }
  return once;
};