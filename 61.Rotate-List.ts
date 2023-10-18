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

function rotateRight ( head: ListNode | null, k: number ): ListNode | null {
  if ( k == 0 ) return head;
  let map: Map<number, ListNode> = new Map(), ptr = head, i = 0, res: ListNode | null = null;
  while ( ptr ) {
    map.set( i, ptr );
    ptr = ptr.next;
    ++i;
  }
  if ( i < 2 || k % i == 0 ) return head;
  k = i - k % i;
  if ( k == 0 ) res = head;
  else {
    let node = map.get( k );
    node ? res = node : res = null;
    if ( res ) {
      ptr = res;
      while ( ptr.next ) ptr = ptr.next;
      ptr.next = head;
      ptr = head;
      while ( ptr && ptr.next !== res ) ptr = ptr.next;
      if ( ptr ) ptr.next = null;
    }
  }
  return res;
};