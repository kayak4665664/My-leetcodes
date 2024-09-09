/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let a = new Set(nums1);
  let b = new Set(nums2);

  let ans1 = [], ans2 = [];

  for (let e of a) {
    if (!b.has(e)) ans1.push(e);
  }

  for (let e of b) {
    if (!a.has(e)) ans2.push(e);
  }

  let res = [ans1, ans2];

  return res;
};