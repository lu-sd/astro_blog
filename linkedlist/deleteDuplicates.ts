// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

import ListNode from "./mergeSortedList";
function deleteDuplicates(head: ListNode | null) {
  if (!head || !head.next) return head;
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else cur = cur.next;
  }
  return head;
}
