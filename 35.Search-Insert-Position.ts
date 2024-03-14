function searchInsert(nums: number[], target: number): number {
  let res = 0;
  let left = 0, right = nums.length;

  while (left < right) {
    let mid = Math.trunc((left + right) / 2);
    if (nums[mid] > target) right = mid;
    else if (nums[mid] < target) left = mid + 1;
    else {
      res = mid;
      break;
    }
    if (left === right) {
      res = left;
      break;
    }
  }

  return res;
};
