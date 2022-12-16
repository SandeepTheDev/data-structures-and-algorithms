class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Time complexity: O(1)
  append(value) {
    const newNode = new Node(value);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Time complexity: O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // Time complexity: O(n)
  insertAt(index, value) {
    // if index is 0 or less than zero prepend it
    if (index <= 0) return this.prepend(value);
    // if index is greater than the length or equal to length append it
    if (index >= this.length) return this.append(value);

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    const newNode = new Node(value);
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  // Time complexity: O(n)
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = this.traverseToIndex(index + 1);
    leader.next = holdingPointer;
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}
