// Given the head of a singly linked list, reverse the list, and return the reversed list.
import ListNode from "./mergeSortedList";
// let a = new ListNode(2, null);
// let b = new ListNode(3, a);
// let c = new ListNode(4, b);
// console.log(c):
// ListNode {
//     val: 4,
//     next: ListNode { val: 3, next: ListNode { val: 2, next: null } }
//   }
function reverseLinkedList(head: ListNode | null): ListNode | null {
  let newlist: ListNode | null = null;

  while (head !== null) {
    newlist = new ListNode(head.val, newlist);

    head = head.next;
  }
  return newlist;
}

function reverseList(head: ListNode | null): ListNode | null {
  // Initialize the predecessor node to null
  let pre: ListNode | null = null;
  // Initialize the current node to the head node
  let cur: ListNode | null = head;
  // Traverse the list as long as the current node is not null
  while (cur !== null) {
    // Record the next node
    let next: ListNode | null = cur.next;
    // Reverse the pointer
    cur.next = pre;
    // Move the predecessor node one step forward
    pre = cur;
    // Move the current node one step forward
    cur = next;
  }
  // After the reversal is complete, the predecessor node becomes the new head node
  return pre;
}
