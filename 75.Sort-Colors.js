/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; ++i) {
    let flag = false;
    for (let j = 1; j <= nums.length - i; ++j) {
      if (nums[j] < nums[j - 1]) {
        flag = true;
        let tmp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = tmp;
      }
    }
    if (!flag) break;
  }
};