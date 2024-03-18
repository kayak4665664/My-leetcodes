function longestConsecutive(nums: number[]): number {
  let set: Set<number> = new Set(nums);
  let res = 0;
  let cnt = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      cnt = 1;
      let i = num + 1;
      while (set.has(i)) {
        ++cnt;
        ++i;
      }
      if (cnt > res) res = cnt;
    }
  }
  return res;
};