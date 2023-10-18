/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList ( head: Node | null ): Node | null {
  let res: Node | null = null, list: Node[] = [], map: Map<Node, number> = new Map(), ptr = head, i = 0;
  while ( ptr !== null ) {
    let node = new Node( ptr.val );
    list.push( node );
    map.set( ptr, i );
    ++i;
    ptr = ptr.next;
  }
  ptr = head;
  i = 0;
  while ( ptr !== null ) {
    if ( list[ i ] ) {
      list[ i + 1 ] ? list[ i ].next = list[ i + 1 ] : null;
      if ( ptr.random ) {
        let index = map.get( ptr.random );
        index !== undefined ? list[ i ].random = list[ index ] : null;
      } else list[ i ].random = null;
    }
    ++i;
    ptr = ptr.next;
  }
  res = list[ 0 ];
  return res;
};