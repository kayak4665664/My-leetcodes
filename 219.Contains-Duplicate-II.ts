function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let map: Map<number, number[]> = new Map();
  let res = false;

  for (let i = 0; i < nums.length; ++i) {
    let num = nums[i];

    if (map.has(num)) {
      let indexes = map.get(num)!;
      indexes!.push(i);
      map.set(num, indexes);
    } else {
      map.set(num, [i]);
    }
  }

  for (let p of map) {
    if (p[1].length > 1) {
      let indexes = p[1];
      for (let i = 0; i < nums.length - 1; ++i) {
        if (indexes[i + 1] - indexes[i] <= k) {
          res = true;
          break;
        }
      }
    }
    if (res === true) break;
  }

  return res;
};