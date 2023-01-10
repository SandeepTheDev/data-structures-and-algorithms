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
    leader.next = newNode;
    this.length++;
    return this;
  }

  // Time complexity: O(n)
  delete(index) {
    const leader = this.traverseToIndex(index - 1);
    const nodeToDelete = this.traverseToIndex(index);
    leader.next = nodeToDelete.next;
    this.length--;
    return this;
  }

  // Time complexity: O(n)
  reverse() {
    if (this.length === 1) {
      return this.head;
    }

    let first = this.head;
    let second = first.next;
    this.tail = first;

    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this;
  }
}

const mySinglyLinkedList = new SinglyLinkedList();
mySinglyLinkedList.append(10);
mySinglyLinkedList.append(20);
mySinglyLinkedList.prepend(0);
mySinglyLinkedList.insert(1, 5);
mySinglyLinkedList.insert(3, 15);
mySinglyLinkedList.reverse();
mySinglyLinkedList.print();
