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
