/*
 * @lc app=leetcode id=4 lang=cpp
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
class Solution {
   public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        vector<int> nums;
        int p1 = 0, p2 = 0, s1 = nums1.size(), s2 = nums2.size();
        while (true) {
            if (p1 >= s1 || p2 >= s2) break;
            if (nums1[p1] <= nums2[p2])
                nums.push_back(nums1[p1++]);
            else
                nums.push_back(nums2[p2++]);
        }
        if (p1 >= s1) {
            while (p2 < s2) nums.push_back(nums2[p2++]);
        } else {
            while (p1 < s1) nums.push_back(nums1[p1++]);
        }
        if (nums.size() % 2)
            return nums[nums.size() / 2];
        else
            return (nums[nums.size() / 2] + nums[nums.size() / 2 - 1]) / 2.0;
    }
};
// @lc code=end
