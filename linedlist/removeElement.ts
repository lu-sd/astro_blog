function removeElements(head: ListNode | null, val: number) {
  let dmy = new ListNode(0, head);
  let cur = dmy;
  while (cur.next !== null) {
    cur.next.val === val ? (cur.next = cur.next.next) : (cur = cur.next);
  }
  return dmy.next;
}
