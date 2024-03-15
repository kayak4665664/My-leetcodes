function maxArea(height: number[]): number {
  let res = 0;
  let left = 0, right = height.length - 1;
  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    if (area > res) res = area;

    if (height[left] <= height[right]) ++left;
    else --right;
  }

  return res;
};