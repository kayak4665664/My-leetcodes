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

function detectCycle ( head: ListNode | null ): ListNode | null {
  const m: Map<ListNode, boolean> = new Map();
  let ptr = head, res: ListNode | null = null;
  while ( ptr !== null ) {
    if ( !m.has( ptr ) ) {
      m.set( ptr, true );
      ptr = ptr.next;
    } else {
      res = ptr;
      break;
    }
  }
  return res;
};