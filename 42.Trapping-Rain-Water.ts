function trap(height: number[]): number {
  let res = 0;
  let left = 0;
  let right = height.length - 1;
  let level = 0;
  while (left < right) {
    let lower = height[left] > height[right] ? height[right--] : height[left++];
    level = Math.max(lower, level);
    res += level - lower;
  }
  return res;
};