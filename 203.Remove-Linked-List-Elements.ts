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

function removeElements ( head: ListNode | null, val: number ): ListNode | null {
  let res: ListNode | null = null, list: ListNode[] = [], ptr = head;
  while ( ptr !== null ) {
    if ( ptr.val != val ) list.push( ptr );
    ptr = ptr.next;
  }
  let len = list.length;
  if ( len > 0 ) res = list[ 0 ];
  for ( let i = 0; i < len - 1; ++i )  list[ i ].next = list[ i + 1 ];
  if ( len > 0 ) list[ len - 1 ].next = null;
  return res;
};