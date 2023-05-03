/*
 * @lc app=leetcode id=1 lang=cpp
 *
 * [1] Two Sum
 */

// @lc code=start
class Solution {
   public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, vector<int>> indices;
        vector<int> ans;
        for (int i = 0; i < nums.size(); ++i) {
            indices[nums[i]].push_back(i);
        }
        for (auto i : indices) {
            if (indices.count(target - i.first)) {
                ans.push_back(indices[i.first][0]);
                if (target - i.first == i.first)
                    ans.push_back(indices[i.first][1]);
                else
                    ans.push_back(indices[target - i.first][0]);
                break;
            }
        }
        return ans;
    }
};
// @lc code=end
