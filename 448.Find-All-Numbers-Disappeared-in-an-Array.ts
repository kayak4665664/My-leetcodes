function findDisappearedNumbers(nums: number[]): number[] {
  const len = nums.length, s: Set<number> = new Set(nums), res: number[] = [];
  for (let i = 1; i <= len; ++i) {
    if (!s.has(i)) res.push(i);
  }
  return res;
};