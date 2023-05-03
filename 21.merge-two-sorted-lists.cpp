/*
 * @lc app=leetcode id=21 lang=cpp
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
   public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        if (list1 == nullptr && list2 == nullptr)
            return nullptr;
        else if (list1 == nullptr)
            return list2;
        else if (list2 == nullptr)
            return list1;
        else {
            ListNode *front, *p, *p1, *p2;
            if (list1->val <= list2->val) {
                front = list1;
                p1 = list1->next;
                p2 = list2;
            } else {
                front = list2;
                p1 = list1;
                p2 = list2->next;
            }
            p = front;
            while (p1 != nullptr && p2 != nullptr) {
                if (p1->val <= p2->val) {
                    p->next = p1;
                    p1 = p1->next;
                } else {
                    p->next = p2;
                    p2 = p2->next;
                }
                p = p->next;
            }
            if (p1 == nullptr)
                p->next = p2;
            else
                p->next = p1;
            return front;
        }
    }
};
// @lc code=end
