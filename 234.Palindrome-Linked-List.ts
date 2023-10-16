/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome ( head: ListNode | null ): boolean {
  let list: number[] = [], ptr = head, res = true;
  while ( ptr !== null ) {
    list.push( ptr.val );
    ptr = ptr.next;
  }
  let left = 0, right = list.length - 1;
  while (left <= right) {
    if (list[right] != list[left]) {
      res = false;
      break;
    }
    ++left;
    --right;
  }
  return res;
};