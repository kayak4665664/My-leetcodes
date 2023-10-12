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

function removeNthFromEnd ( head: ListNode | null, n: number ): ListNode | null {
  let ptr = head, res: ListNode | null, list: ListNode[] = [];
  while ( ptr !== null ) {
    list.push( ptr );
    ptr = ptr.next;
  }
  let len = list.length;
  if ( n == len && head ) res = head.next;
  else {
    let prior = list[ len - n - 1 ], next = n == 1 ? null : list[ len - n + 1 ];
    prior.next = next;
    res = head;
  }
  return res;
};