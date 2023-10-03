function sortedSquares(nums: number[]): number[] {
  nums = nums.map(num => num * num);
  nums.sort((a, b) => a - b);
  return nums;
};