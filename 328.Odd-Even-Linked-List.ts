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

function oddEvenList ( head: ListNode | null ): ListNode | null {
  let odd = head, ptr = head, oddTail: ListNode | null = head, even: ListNode | null = null, i = 1, evenTail: ListNode | null = null;
  while ( ptr !== null ) {
    if ( i % 2 != 0 ) {
      if ( i > 1 && oddTail ) {
        oddTail.next = ptr;
        oddTail = ptr;
      }
    } else {
      if ( i == 2 ) {
        even = ptr;
        evenTail = ptr;
      } else {
        if ( evenTail ) {
          evenTail.next = ptr;
          evenTail = ptr;
        }
      }
    }
    ptr = ptr.next;
    ++i;
  }
  if ( oddTail ) oddTail.next = even;
  if ( evenTail ) evenTail.next = null;
  return odd;
};