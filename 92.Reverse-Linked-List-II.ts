function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (left === right || head === null) return head;

  let nums = [], cnt = 0, ptr = head;

  while (true) {
    ++cnt;
    if (cnt >= left && cnt <= right) nums.push(ptr.val);
    if (ptr.next) ptr = ptr.next;
    else break;
  }

  ptr = head;
  cnt = 0;
  let len = nums.length;

  while (true) {
    ++cnt;
    if (cnt >= left && cnt <= right) ptr.val = nums[--len];
    if (ptr.next) ptr = ptr.next;
    else break;
  }

  return head;
};