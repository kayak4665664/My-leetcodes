/*
 * @lc app=leetcode id=34 lang=cpp
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
class Solution {
   public:
    vector<int> searchRange(vector<int>& nums, int target) {
        if (!nums.size())
            return vector<int>{-1, -1};
        else {
            int pos = binary_search(nums, 0, nums.size() - 1, target);
            if (pos == -1)
                return vector<int>{-1, -1};
            else {
                int left = pos - 1, right = pos + 1, size = nums.size();
                while (left >= 0  && nums[left] == target) --left;
                while (right < size && nums[right] == target) ++right;
                return vector<int>{left + 1, right - 1};
            }
        }
    }

    int binary_search(vector<int> nums, int left, int right, int key) {
        int pos = -1, mid;
        while (left <= right) {
            mid = left + (right - left) / 2;
            if (key > nums[mid])
                left = mid + 1;
            else if (key < nums[mid])
                right = mid - 1;
            else {
                pos = mid;
                break;
            }
        }
        return pos;
    }
};
// @lc code=end
