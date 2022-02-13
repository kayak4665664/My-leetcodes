/*
 * @lc app=leetcode id=17 lang=cpp
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
class Solution {
   public:
    vector<string> index {
        "", "", "abc", "def", "ghi", "jkl",
        "mno", "pqrs", "tuv", "wxyz"
    };
    vector<string> ans;
    string s = "";
    vector<string> letterCombinations(string digits) {
        dfs(0, digits);
        return ans;
    }

    void dfs(int n, string digits) {
        if (n >= digits.length()) {
            if (digits.length()) ans.push_back(s);
            return;
        }
        for (auto c : index[digits[n] - '0']) {
            s.push_back(c);
            dfs(n + 1, digits);
            s.pop_back();
        }
    }
};
// @lc code=end
