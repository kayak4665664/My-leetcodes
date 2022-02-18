/*
 * @lc app=leetcode id=42 lang=cpp
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
class Solution {
   public:
    int trap(vector<int>& height) {
        int ans = 0, l = 0, r = height.size() - 1, level = 0;
        while (l < r) {
            int lower = (height[l] > height[r] ? height[r--] : height[l++]);
            level = max(lower, level);
            ans += level - lower;
        }
        return ans;
    }
};
// @lc code=end

