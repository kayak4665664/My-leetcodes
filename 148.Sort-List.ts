function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let ptr: ListNode | null = head;
  let list: ListNode[] = [];

  while (ptr) {
    list.push(ptr);
    ptr = ptr.next;
  }

  list.sort((a, b) => a.val - b.val);

  ptr = list[0];
  for (let i = 0; i < list.length - 1; ++i) list[i].next = list[i + 1];
  list[list.length - 1].next = null;

  return ptr;
};