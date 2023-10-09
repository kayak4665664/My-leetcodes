function heightChecker(heights: number[]): number {
  let res = 0, len = heights.length;
  const temp = [...heights];
  heights.sort((a, b) => a - b);
  for (let i = 0; i < len; ++i) {
    if (temp[i] != heights[i]) ++res;
  }
  return res;
};