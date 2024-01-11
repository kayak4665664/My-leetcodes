function mySqrt(x: number): number {
  for (let i = 1; i <= x; ++i) {
    if (i * i > x) return i - 1;
    else if (i * i === x) return i;
    else continue;
  }
  return x;
};