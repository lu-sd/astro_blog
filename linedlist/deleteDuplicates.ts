import ListNode from "./mergeSortedList";
function deleteDuplicates(node: ListNode | null) {
  let cur = node;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else cur = cur.next;
  }
  return node;
}
