class Node {
  constructor(value, prevNode, nextNode) {
    this.value = value;
    this.prev = prevNode;
    this.next = nextNode;
  }
}

export default class LinkedList {
  constructor() {
    this.list = new Map();
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value, null, null);
    if (!this.head) {
      this.addFirstNode(value);
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.list.set(value, newNode);
      this.tail = newNode;
    }
  }

  pop() {
    if (this.tail) {
      let oldTail = this.tail;
      let newTail = oldTail.prev;
      let returnValue = oldTail.value;
      this.tail = newTail;
      this.list.delete(oldTail.value);
      if (this.count() === 0) {
        this.head = null;
        this.tail = null;
      }
      return returnValue;
    }
  }

  unshift(value) {
    const newNode = new Node(value, null, null);
    if (!this.head) {
      this.addFirstNode(value);
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.list.set(value, newNode);
      this.head = newNode;
    }
  }  

  shift() {
    if (this.head) {
      let oldHead = this.head;
      let newHead = oldHead.next;
      let returnValue = oldHead.value;
      this.head = newHead;
      this.list.delete(oldHead.value);
      if (this.count() === 0) {
        this.head = null;
        this.tail = null;
      }      
      return returnValue;
    }
  }  

  count() {
    return this.list.size;
  }

  delete(value) {
    const targetNode = this.list.get(value);

    if (targetNode) {
      if (this.count() === 1) {
        this.emptyList();
      } else if (this.head.value === value ) {
        // if target is the head
        this.shift(value);
      } else if (this.tail.value === value) {
        // target is the tail
        this.pop(value);
      } else {
        targetNode.prev.next = targetNode.next;
        targetNode.next.prev = targetNode.prev;

        this.list.delete(value);
      }      
    }
  }

  addFirstNode(value) {
    const newNode = new Node(value, null, null);
    this.list.set(value, newNode);
    this.head = newNode;
    this.tail = newNode;
  }

  emptyList() {
    this.list.clear();
    this.head = null;
    this.tail = null;
  }
} 
