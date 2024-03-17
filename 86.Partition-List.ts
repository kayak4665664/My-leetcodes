function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) return null;

  let nodes: ListNode[] = [];
  let ptr: ListNode | null = head;
  while (ptr) {
    nodes.push(ptr);
    ptr = ptr.next;
  }
  nodes.sort((a, b) => {
    if (a.val < x && b.val < x) return 0;
    else if (a.val >= x && b.val >= x) return 0;
    else if (a.val >= x && b.val < x) return 1;
    else return -1;
  });

  let res = nodes[0];
  ptr = res;

  for (let i = 1; i < nodes.length; ++i) {
    ptr.next = nodes[i]!;
    ptr = ptr.next;
  }
  ptr.next = null;
  return res;
};
