function maxPoints(points: number[][]): number {
  if (points.length < 3) return points.length;

  let res = 0;
  let x_1 = 0, y_1 = 0, x_2 = 0, y_2 = 0;
  let slope = 0, b = 0;

  for (let i = 0; i < points.length; ++i) {
    for (let j = i + 1; j < points.length; ++j) {
      x_1 = points[i][0];
      y_1 = points[i][1];
      x_2 = points[j][0];
      y_2 = points[j][1];
      let cnt = 2;
      if (x_1 !== x_2) {
        slope = (y_1 - y_2) / (x_1 - x_2);
        b = y_1 - slope * x_1;
        for (let k = 0; k < points.length; ++k) {
          if (k !== i && k !== j) {
            if (Math.abs(points[k][0] * slope + b - points[k][1]) < 1e-9) ++cnt;
          }
        }
      } else {
        for (let k = 0; k < points.length; ++k) {
          if (k !== i && k !== j) {
            if (points[k][0] === x_1) ++cnt;
          }
        }
      }
      if (cnt > res) res = cnt;
    }
  }
  return res;
};
