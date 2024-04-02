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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 1) return head;

  let list: ListNode[] = [];
  let ptr: ListNode | null = head;
  let result: ListNode | null = null;

  while (ptr) {
    list.push(ptr);
    ptr = ptr.next;
  }

  if (k > list.length) return head;

  for (let i = k; i <= list.length; i += k) {
    for (let j = i - 1; j > i - k; --j) {
      list[j].next = list[j - 1];
    }
    if (i + k <= list.length) list[i - k].next = list[i + k - 1];
    else if (i === list.length) list[i - k].next = null;
    else list[i - k].next = list[i];
  }

  result = list[k - 1];
  return result;
};

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 1) return head;

  let ptr: ListNode | null = head;
  let result: ListNode | null = null;
  let len = 0;

  while (ptr) {
    len += 1;
    ptr = ptr.next;
  }

  if (k > len) return head;

  let prior: ListNode | null = null;
  let tails: ListNode[] = [];
  ptr = head;
  let flag = false;

  for (let i = 0; i < len; ++i) {
    let next: ListNode | null = ptr!.next;

    if (i % k === 0) {
      if (len - i >= k) tails.push(ptr!);
      else {
        let tail = tails.shift()!;
        tail.next = ptr;
        break;
      }
    } else if ((i + 1) % k === 0) {
      if (!flag) {
        result = ptr;
        flag = true;
      }
      else {
        let tail = tails.shift()!;
        tail.next = ptr;
      }
      ptr!.next = prior;
    } else ptr!.next = prior;

    prior = ptr;
    ptr = next;
  }

  if (tails.length) {
    let tail = tails.shift()!;
    tail.next = null;
  }

  return result;
};