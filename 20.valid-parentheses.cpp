/*
 * @lc app=leetcode id=20 lang=cpp
 *
 * [20] Valid Parentheses
 */

// @lc code=start
class Solution {
   public:
    bool isValid(string s) {
        stack<char> characters;
        for (char c : s) {
            if (c == '(' || c == '[' || c == '{')
                characters.push(c);
            else if (!characters.empty() &&
                     (c == ')' && characters.top() == '(' ||
                      c == '}' && characters.top() == '{' ||
                      c == ']' && characters.top() == '['))
                characters.pop();
            else
                return false;
        }
        if (characters.empty())
            return true;
        else
            return false;
    }
};
// @lc code=end
