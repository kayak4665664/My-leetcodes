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

function hasCycle ( head: ListNode | null ): boolean {
  const m: Map<ListNode, boolean> = new Map();
  let ptr = head, res = false;
  while ( ptr !== null ) {
    if ( !m.has( ptr ) ) {
      m.set( ptr, true );
      ptr = ptr.next;
    } else {
      res = true;
      break;
    }
  }
  return res;
};