class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
    this.size = 0;
    this.lastNode = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.size++;
    } else if (this.head.nextNode) {
      let node = new Node(value);
      this.lastNode.nextNode = node;
      this.lastNode = node;
      this.tail = node;
      this.size++;
    } else {
      let node = new Node(value);
      this.tail = node;
      this.head.nextNode = node;
      this.lastNode = node;
      this.size++;
    }
  }

  prepend(value) {
    let holdThis = this.head.nextNode;
    let node = new Node(value);
    this.head.nextNode = node;
    node.nextNode = holdThis;
    this.size++;
  }

  size() {
    return this.size;
  }

  giveHead() {
    return this.head.value;
  }

  giveTail() {
    return this.lastNode.value;
  }

  at(index) {
    let currentNode = this.head;
    let counter = 0;

    while (counter !== index) {
      currentNode = currentNode.nextNode;
      counter++;
    }
    return currentNode;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}
