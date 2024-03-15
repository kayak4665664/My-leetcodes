function removeDuplicates(nums: number[]): number {
  let cnt = 0;
  let n = 0;
  let index = 0;
  while (index < nums.length) {
    let num = nums[index];
    if (n !== num) {
      n = num;
      cnt = 1
    } else ++cnt;
    if (cnt >= 3) nums.splice(index, 1);
    else ++index;
  }
  return nums.length;
};
