class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
class Mylinkedlist {
  private size: number;
  private head: ListNode | null;
  private tail: ListNode | null;
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = this.head;
  }
  append(val: number) {
    let newNode = new ListNode(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }
  prepend(value: number) {
    let newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return this;
  }
  printlist() {
    const arr: number[] = [];
    let cur = this.head;
    while (cur !== null) {
      arr.push(cur.val);
      cur = cur.next;
    }
    return arr;
  }
  Insert(index: number, val: number) {
    if (index >= this.size) {
      return this.append(val);
    }
    if (index === 0) {
      return this.prepend(val);
    }
    const newNode = new ListNode(val);
    const leader = this.traversToIndex(index - 1);
    if (leader) {
      const holdingPoint = leader.next;
      leader.next = newNode;
      newNode.next = holdingPoint;
      this.size++;
      return this.printlist();
    }
  }
  traversToIndex(index: number) {
    let counter = 0;
    let cur = this.head;
    while (counter !== index && cur !== null) {
      cur = cur?.next;
      counter++;
    }
    return cur;
  }
  remove(index: number) {
    if (index > 0 || index < this.size) {
      const leader = this.traversToIndex(index - 1);
      if (leader) {
        const unwanted = leader.next;
        if (unwanted) {
          leader.next = unwanted.next;
        }

        this.size--;
      }

      if (index === 0 && this.head) {
        this.head = this.head.next;
        this.size--;
      }
    }
    return this.printlist();
  }
}
const mylinedlist = new Mylinkedlist();
mylinedlist.append(10);
mylinedlist.append(15);
mylinedlist.append(12);
// mylinedlist.prepend(1);
mylinedlist.Insert(0, 3);
mylinedlist.remove(0);
console.log(mylinedlist.printlist());
