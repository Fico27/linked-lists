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
    return this.tail.value;
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
  pop() {
    let currentNode = this.head;
    if (currentNode === null) {
      return "No List Currently Exists";
    } else if (currentNode.nextNode === null) {
      this.head = null;
      this.size--;
    } else {
      while (currentNode.nextNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      this.tail = currentNode;
      currentNode.nextNode = null;
      this.size--;
    }
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      } else {
        index++;
        currentNode = currentNode.nextNode;
      }
    }
    return null;
  }

  toString() {
    let array = [];
    let currentNode = this.head;

    while (currentNode) {
      array.push(`( ${currentNode.value} ) -> `);
      currentNode = currentNode.nextNode;
    }
    return array.join(" ").toString() + "null";
  }

  insertAt(value, index) {
    let count = 0;
    let currentNode = this.head;
    let prevNode = null;

    while (count !== index) {
      if (count === index - 1) {
        prevNode = currentNode;
      }

      currentNode = currentNode.nextNode;
      count++;
    }
    let node = new Node(value);
    node.nextNode = currentNode;
    prevNode.nextNode = node;
    this.size++;
  }

  removeAt(index) {
    let currentNode = this.head;
    let count = 0;
    let prevNode = null;

    if (this.size === 0) {
      return "No list exists. Nothing to remove.";
    } else if (index > this.size) {
      return "Index is larger than the linked list!";
    }

    while (count !== index) {
      if (count === index - 1) {
        prevNode = currentNode;
      }
      currentNode = currentNode.nextNode;
      count++;
    }
    prevNode.nextNode = currentNode.nextNode;
    this.size--;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

let list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.insertAt("A MOTHER FUCKING DRAGON", 3);
console.log(list.toString());
