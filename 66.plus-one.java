/*
 * @lc app=leetcode id=66 lang=java
 *
 * [66] Plus One
 */

// @lc code=start
class Solution {
    public int[] plusOne(int[] digits) {
        int end = digits.length - 1;
        int[] result = new int[end + 1];
        boolean carry = false;
        result[end] = digits[end] + 1;
        if (result[end] == 10) {
            result[end] = 0;
            carry = true;
        }
        for (int i = end - 1; i >= 0; --i) {
            result[i] = digits[i];
            if (carry) {
                result[i] += 1;
                if (result[i] == 10) {
                    result[i] = 0;
                    carry = true;
                } else {
                    carry = false;
                }
            }
        }
        if (carry) {
            int[] tmp = result;
            result = new int[end + 2];
            result[0] = 1;
            for (int i = 1; i < end + 2; ++i) {
                result[i] = tmp[i - 1];
            }
        }
        return result;
    }
}
// @lc code=end

