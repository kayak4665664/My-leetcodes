function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let res: number[][] = [];
  for (let i = 0; i < intervals.length; ++i) {
    let len = res.length;
    if (len === 0 || res[len - 1][1] < intervals[i][0]) res.push(intervals[i]);
    else res[len - 1][1] = Math.max(res[len - 1][1], intervals[i][1]);
  }
  return res;
};