function removeDuplicates(nums: number[]): number {
  const set: Set<number> = new Set();
  let i = 0;
  while (i < nums.length) {
    if (set.has(nums[i])) nums.splice(i, 1);
    else {
      set.add(nums[i]);
      ++i;
    }
  }
  return nums.length;
};