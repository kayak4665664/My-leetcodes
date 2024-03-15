function findMinArrowShots(points: number[][]): number {
  points.sort(
    (a, b): number => {
      return a[1] - b[1];
    }
  )
  let res = 1;
  let arrow = points[0][1];
  for (let i = 1; i < points.length; ++i) {
    if (arrow < points[i][0]) {
      ++res;
      arrow = points[i][1];
    }
  }
  return res;
};