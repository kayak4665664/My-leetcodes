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

function getIntersectionNode ( headA: ListNode | null, headB: ListNode | null ): ListNode | null {
  let m: Map<ListNode, boolean> = new Map(), ptrA = headA, ptrB = headB, res: ListNode | null = null;
  while ( ptrA !== null ) {
    m.set( ptrA, true );
    ptrA = ptrA.next;
  }
  while ( ptrB !== null ) {
    if ( !m.has( ptrB ) ) {
      m.set( ptrB, true );
      ptrB = ptrB.next;
    } else {
      res = ptrB;
      break;
    }
  }
  return res;
};