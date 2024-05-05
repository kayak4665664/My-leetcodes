/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let len = nums.length;
  let res = Infinity;
  let sum = 0;

  for (let right = 0; right < len; ++right) {
    sum += nums[right];

    while (sum >= target) {
      res = Math.min(res, right - left + 1);
      sum -= nums[left];
      ++left;
    }
  }

  return res === Infinity ? 0 : res;
};