function checkIfExist(arr: number[]): boolean {
  let res = false;
  const set: Set<number> = new Set(arr);
  const zeros = arr.filter(num => num == 0);
  const len = zeros.length;
  for (let s of set) {
    if (set.has(2 * s)) {
      if (s == 0 && len < 2) continue;
      res = true;
      break;
    }
  }
  return res;
};