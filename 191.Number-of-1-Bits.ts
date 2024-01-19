function hammingWeight(n: number): number {
  let s = n.toString(2);
  let res = 0;
  for (let c of s) {
    if (c === "1") ++res;
  }
  return res;
};