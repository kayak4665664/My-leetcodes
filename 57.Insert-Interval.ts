function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length === 0) return [newInterval];
  let res: number[][] = [];
  let left = newInterval[0], right = newInterval[1];
  let flag = false;
  let inserted = false;
  for (let interval of intervals) {
    if (inserted) {
      res.push(interval);
      continue;
    }
    if (!flag) {
      if (interval[1] < left) res.push(interval);
      else if (interval[0] > right) {
        res.push(newInterval);
        res.push(interval);
        inserted = true;
      }
      else {
        left = Math.min(interval[0], left);
        right = Math.max(interval[1], right);
        flag = true;
      }
    } else {
      if (interval[0] <= right) {
        right = Math.max(right, interval[1]);
      } else {
        res.push([left, right]);
        res.push(interval);
        flag = false;
        inserted = true;
      }
    }
  }
  if (!inserted) res.push([left, right]);

  return res;
};