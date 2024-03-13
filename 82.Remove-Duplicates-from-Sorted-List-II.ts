function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let res: ListNode | null = null;
  let map: Map<number, number> = new Map();
  let pos: ListNode | null = head, ptr: ListNode | null = null;

  while (pos) {
    let cnt = map.get(pos.val);
    if (!cnt) map.set(pos.val, 1);
    else map.set(pos.val, cnt + 1);
    pos = pos.next;
  }

  pos = head;
  while (pos) {
    if (map.get(pos.val)! > 1) pos = pos.next;
    else {
      if (!res) {
        res = pos;
        ptr = res;
      }
      else {
        ptr!.next = pos;
        ptr = ptr!.next;
      }
      pos = pos.next;
    }
  }
  if (ptr) ptr.next = null;

  return res;
};