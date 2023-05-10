// Given the head of a linked list, remove the nth node from the end of the list and return its head.
import ListNode from "./mergeSortedList";
function removeNthNode(head: ListNode | null, n: number): ListNode | null {
  // const dummy = new ListNode();
  // dummy.next = head;
  // let fast = dummy,
  //   slow = dummy;
  // while (n > 0) {
  //   fast = fast.next;
  //   n--;
  // }
  // while (fast.next && slow.next) {
  //   fast = fast.next;
  //   slow = slow.next;
  // }
  // slow.next = slow.next!.next;
  // return dummy.next;

  let dummy = new ListNode(0, head);
  let pre = dummy,
    cur = dummy;

  while (--n) {
    if (cur.next === null) {
      // If the linked list is shorter than n, return head
      return head;
    }
    cur = cur.next;
  }

  // Move both pointers until cur reaches the last node
  while (cur.next && pre.next) {
    pre = pre.next;
    cur = cur.next;
  }

  // Remove the node by updating pre.next
  if (pre.next === null) {
    return dummy.next;
  }
  pre.next = pre.next.next;

  // Return the head of the modified linked list
  return dummy.next;
}
