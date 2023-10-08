function replaceElements(arr: number[]): number[] {
  let res: number[] = [], len = arr.length;
  for (let i = 0; i < len - 1; ++i) {
    let max = Math.max(...arr.slice(i + 1, len));
    res.push(max);
  }
  res.push(-1);
  return res;
};