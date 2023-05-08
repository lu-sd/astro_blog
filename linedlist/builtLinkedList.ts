// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.
//
// Implement the MyLinkedList class:
//
// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

class SinglyListNode {
  val: number;
  next: SinglyListNode | null;
  constructor(val: number = 0, next: SinglyListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
class Mylinkedlist {
  dummy: SinglyListNode;
  size: number;
  constructor() {
    this.dummy = new SinglyListNode();
    this.size = 0;
  }
  traversToIndex(index: number): SinglyListNode {
    let count = 0;
    let cur = this.dummy;
    while (index >= 0) {
      cur = cur.next!;
      index--;
    }
    return cur;
  }
  printlist() {
    const arr: number[] = [];
    let cur = this.dummy.next;
    while (cur !== null) {
      arr.push(cur.val);
      cur = cur.next;
    }
    return arr;
  }
  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let cur: SinglyListNode = this.dummy;
    while (index >= 0 && cur.next !== null) {
      cur = cur.next;
      index--;
    }
    return cur.val;
  }
  addAtHead(value: number): void {
    const cur = this.dummy.next;
    const newNode = new SinglyListNode(value, cur);
    this.dummy.next = newNode;
    this.size++;
  }
  addAtTail(val: number): void {
    const newNode = new SinglyListNode(val);
    let cur = this.dummy;
    while (cur && cur.next) {
      cur = cur.next;
    }
    cur.next = newNode;
    this.size++;
  }
  addAtIndex(index: number, val: number): void {
    if (index <= 0) {
      this.addAtHead(val);
    } else if (index >= this.size) {
      this.addAtTail(val);
    } else {
      const newNode = new SinglyListNode(val);
      const leader = this.traversToIndex(index - 1);
      // point newNode.next to the instert position(leader.next)
      newNode.next = leader.next;
      // point leader.next to newNode
      leader.next = newNode;
      this.size++;
    }
  }
  deleteAtindex(index: number): void {
    if (index > 0 && index < this.size) {
      const leader = this.traversToIndex(index - 1);
      if (leader.next) {
        const unwanted = leader.next;
        leader.next = unwanted.next;
        this.size--;
      }
    }
    if (index < 0 || index >= this.size) return;
    if (index === 0 && this.dummy.next) {
      this.dummy = this.dummy.next;
      this.size--;
    }
  }
}
const mylinkedlist = new Mylinkedlist();
mylinkedlist.addAtHead(5);
mylinkedlist.addAtTail(6);
mylinkedlist.addAtHead(4);
console.log(mylinkedlist.printlist());

mylinkedlist.get(0);
mylinkedlist.addAtIndex(2, 7);
mylinkedlist.deleteAtindex(0);

console.log(mylinkedlist.printlist());
