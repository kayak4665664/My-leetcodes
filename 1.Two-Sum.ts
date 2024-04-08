function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  let index: Map<number, number[]> = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (index.has(nums[i])) {
      index.set(nums[i], [...index.get(nums[i]), i]);
    } else {
      index.set(nums[i], [i]);
    }
    let n = target - nums[i];
    if (n === nums[i]) {
      if (index.get(nums[i]).length >= 2) {
        result = [index.get(nums[i])[0], index.get(nums[i])[1]];
        break;
      }
    } else {
      if (index.has(n)) {
        result = [index.get(n)[0], index.get(nums[i])[0]];
        break;
      }
    }
  }
  return result;
};