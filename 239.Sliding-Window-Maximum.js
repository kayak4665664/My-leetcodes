/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
  let res = [];
  let window = [];
  for (let i = 0; i < nums.length; ++i) {
    if (window[0] < i - k + 1) window.shift();

    if (nums[i] < nums[window[window.length - 1]]) window.push(i);
    else {
      while (window.length > 0 && nums[window[window.length - 1]] <= nums[i]) window.pop();
      window.push(i);
    }

    if (i >= k - 1) res.push(nums[window[0]]);
  }

  return res;
};