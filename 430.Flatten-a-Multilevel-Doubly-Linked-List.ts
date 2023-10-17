/**
 * Definition for node.
 * class Node {
 *     val: number
 *     prev: Node | null
 *     next: Node | null
 *     child: Node | null
 *     constructor(val?: number, prev? : Node, next? : Node, child? : Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */

function flatten ( head: Node | null ): Node | null {
  let ptr = head;
  while ( ptr !== null ) {
    if ( ptr.child ) {
      let next = ptr.next;
      let child = flatten( ptr.child );
      ptr.child = null;
      if ( child ) {
        ptr.next = child;
        child.prev = ptr;
        while ( ptr.next ) ptr = ptr.next;
        ptr.next = next;
        if ( next ) next.prev = ptr;
      }
    }
    ptr = ptr.next;
  }
  return head;
};