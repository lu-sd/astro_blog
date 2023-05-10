// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
import ListNode from "./mergeSortedList";

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  // Create a dummy node as the predecessor of the head node
  const dummy = new ListNode();
  dummy.next = head;
  // Set the predecessor node to the dummy node
  let pre = dummy;
  // Traverse the list until the node before the m-th node
  for (let i = 0; i < left - 1; i++) {
    // add a type guard to check if pre is not null before accessing its next property.
    if (pre.next === null) {
      return null;
    }
    pre = pre.next;
  }
  let cur = pre.next;
  for (let i = 0; i < right - left; i++) {
    if (cur && cur.next) {
      let next = cur.next;
      cur.next = next.next;
      next.next = pre.next;
      pre.next = next;
    }
  }

  // Return the head node after the reversal
  return dummy.next;
}
