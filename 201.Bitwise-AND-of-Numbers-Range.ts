function rangeBitwiseAnd(left: number, right: number): number {
  let res = left & right;
  for (let i = left + 1; i < right; ++i) {
    res &= i;
    if (res === 0) break;
  }
  return res;
};