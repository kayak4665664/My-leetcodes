/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let abs = Infinity;
  let res = target;

  for (let i = 0; i < nums.length; ++i) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < abs) {
        abs = Math.abs(sum - target);
        res = sum;
      }

      if (sum === target) return res;
      else if (sum < target) ++left;
      else --right;
    }

  }

  return res;
};