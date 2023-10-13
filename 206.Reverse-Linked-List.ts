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

function reverseList ( head: ListNode | null ): ListNode | null {
  let res: ListNode | null = null, list: ListNode[] = [], ptr = head;
  while ( ptr !== null ) {
    list.push( ptr );
    ptr = ptr.next;
  }
  let len = list.length;
  res = list[ len - 1 ] === undefined ? null : list[ len - 1 ];
  for ( let i = len - 1; i > 0; --i ) {
    let prior = list[ i - 1 ], node = list[ i ];
    node.next = prior;
  }
  if ( len > 0 ) list[ 0 ].next = null;
  return res;
};