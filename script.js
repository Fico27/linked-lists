class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  printList() {
    let node = this.head;
    while (node) {
      console.log(`${node.value}`);
      node = node.nextNode;
    }
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}
