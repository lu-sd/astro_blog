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
  let slow = dummy,
    fast = dummy;

  while (n > 0) {
    if (fast.next === null) {
      // If the linked list is shorter than n, return head
      return head;
    }
    fast = fast.next;
    n--;
  }

  // Move both pointers until cur reaches the last node
  while (fast.next && slow.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the node by updating pre.next
  if (slow.next === null) {
    return dummy.next;
  }
  slow.next = slow.next.next;

  // Return the head of the modified linked list
  return dummy.next;
}
