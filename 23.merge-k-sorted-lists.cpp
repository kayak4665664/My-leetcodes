/*
 * @lc app=leetcode id=23 lang=cpp
 *
 * [23] Merge k Sorted Lists
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
    ListNode *mergeKLists(vector<ListNode *> &lists) {
        ListNode *front, *p;
        auto cmp = [](ListNode *a, ListNode *b) { return a->val >= b->val; };
        priority_queue<ListNode *, vector<ListNode *>, decltype(cmp)> ptr(cmp);
        for (auto list : lists) {
            if (list != nullptr) ptr.push(list);
        }
        if (!lists.size() || ptr.empty())
            return nullptr;
        else {
            front = ptr.top();
            ptr.pop();
            if(front->next != nullptr) ptr.push(front->next);
            p = front;
            while (!ptr.empty()) {
                p->next = ptr.top();
                ptr.pop();
                p = p->next;
                if (p->next != nullptr) ptr.push(p->next);
            }
            return front;
        }
    }
};
// @lc code=end
