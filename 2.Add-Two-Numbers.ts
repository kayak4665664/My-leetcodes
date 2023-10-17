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

function addTwoNumbers ( l1: ListNode | null, l2: ListNode | null ): ListNode | null {
  let ptr1 = l1, ptr2 = l2;
  while ( ptr2 !== null || ptr1 !== null ) {
    if ( ptr2 !== null && ptr1 !== null ) {
      ptr1.val += ptr2.val;
      if ( ptr1.val > 9 ) {
        if ( ptr1.next ) {
          ptr1.next.val += 1;
          ptr1.val -= 10;
        } else {
          let next = new ListNode( 1 );
          ptr1.val -= 10;
          ptr1.next = next;
        }
      }
      if ( ptr2.next && ptr1.next === null ) ptr1.next = new ListNode( 0 );
      ptr1 = ptr1.next;
      ptr2 = ptr2.next;
    } else if ( ptr2 === null && ptr1 ) {
      if ( ptr1.val > 9 ) {
        if ( ptr1.next ) {
          ptr1.next.val += 1;
          ptr1.val -= 10;
          if ( ptr1.next.val < 10 ) break;
          ptr1 = ptr1.next;
        } else {
          let next = new ListNode( 1 );
          ptr1.val -= 10;
          ptr1.next = next;
        }
      } else break;
    }
  }
  return l1;
};