class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Time complexity: O(1)
  append(value) {
    const newNode = new Node(value);
    if (this.head) {
      newNode.prev = this.tail;
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
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  // Time complexity: O(n)
  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    let result = null;

    while (currentNode !== null) {
      if (counter === index) {
        return (result = currentNode);
      } else {
        currentNode = currentNode.next;
        counter++;
      }
    }

    return result;
  }

  // Time complexity: O(n)
  print() {
    let currentNode = this.head;
    let array = [];
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  // Time complexity: O(n)
  insert(index, value) {
    if (index < 0) return this;
    if (index === 0) return this.prepend(value);
    if (this.length === index) return this.append(value);

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    newNode.next = leader.next;
    newNode.prev = leader;
    leader.next = newNode;
    leader.next.prev = newNode;
    this.length++;
    return this;
  }

  // Time complexity: O(n)
  delete(index) {
    const leader = this.traverseToIndex(index - 1);
    const nodeToDelete = this.traverseToIndex(index);
    leader.next = nodeToDelete.next;
    nodeToDelete.prev = leader;
    this.length--;
    return this;
  }
}

const myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.append(10);
myDoublyLinkedList.append(20);
myDoublyLinkedList.prepend(0);
myDoublyLinkedList.insert(1, 5);
myDoublyLinkedList.insert(3, 15);
myDoublyLinkedList.delete(myDoublyLinkedList.length - 1);
myDoublyLinkedList.print();
