/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

let set = new Set();
let res = [];
let t = 0;
let c = [];

function dfs(nums, sum) {
  if (sum === t) {
    let str = "";
    for (let n of nums) str += n + ",";
    if (!set.has(str)) {
      res.push([...nums]);
      set.add(str);
    }
    return;
  }

  for (let i = 0; i < c.length; ++i) {
    if (sum + c[i] > t) break;
    if (nums.length === 0 || c[i] >= nums[nums.length - 1]) {
      nums.push(c[i]);
      sum += c[i];
      dfs(nums, sum);
      nums.pop();
      sum -= c[i];
    }
  }
}

var combinationSum = function (candidates, target) {
  set.clear();
  res = [];
  t = target;
  c = candidates;

  candidates.sort((a, b) => a - b);

  dfs([], 0);

  return res;
};