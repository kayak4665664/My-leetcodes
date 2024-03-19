function threeSum(nums: number[]): number[][] {
  let map: Map<number, Set<number>> = new Map();
  let res: number[][] = [];
  let s_1: Set<string> = new Set(), s_2: Set<number> = new Set();
  let len = nums.length;
  for (let i = 0; i < len; ++i) {
    let set = map.get(nums[i]);
    if (set === undefined) {
      set = new Set();
      set.add(i);
      map.set(nums[i], set);
    }
    else set.add(i);
  }
  for (let i = 0; i < len; ++i) {
    if (!s_2.has(nums[i])) {
      for (let j = i + 1; j < len; ++j) {
        let k = 0 - nums[i] - nums[j];
        let set = map.get(k);
        if (set !== undefined) {
          if (!(set.size === 0 || set.size === 1 && (set.has(i) || set.has(j)) || set.size === 2 && set.has(i) && set.has(j))) {
            let indexes: number[] = [nums[i], nums[j], k];
            indexes.sort((a, b) => a - b);
            let str = indexes.toString();
            if (!s_1.has(str)) {
              s_1.add(str);
              res.push(indexes);
            }
          }
        }
      }
      s_2.add(nums[i]);
    }
  }
  return res;
};