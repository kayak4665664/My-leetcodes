function rotate(nums: number[], k: number): void {
  let len = nums.length;
  k = k % len;
  for (let i = 0; i < k; ++i) {
    let top = nums.pop()!;
    nums.splice(0, 0, top);
  }
};