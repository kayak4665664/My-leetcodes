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

const middleNode = ( head: ListNode | null ): ListNode | null => {
  let ptr = head;
  let index = 0;
  while (ptr != null) {
    ++index;
    ptr = ptr.next;
  }
  index = Math.floor(index / 2) + 1;
  ptr = head;
  for (let i = index; i > 1 && ptr != null; --i) ptr = ptr.next;
  return ptr;
};