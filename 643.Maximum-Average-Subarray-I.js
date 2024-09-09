/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

  function mean(nums) {
    let sum = 0;
    for (num of nums) sum += num;
    return sum / nums.length;
  }

  if (k >= nums.length) return mean(nums);
  else {
    let window = nums.slice(0, k);
    let sum = window.reduce((p, w) => { return p + w }, 0);
    let max = sum / k;

    for (let i = 1; i + k <= nums.length; ++i) {
      sum -= window[0];
      window.splice(0, 1);
      window.push(nums[i + k - 1]);
      sum += nums[i + k - 1];
      let ave = sum / k;
      if (ave > max) max = ave;
    }
    return max;
  }
};