class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

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

  print() {
    let currentNode = this.head;
    let array = [];
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  insert(index, value) {
    if (index < 0) return this;
    if (index === 0) return this.prepend(value);
    if (this.length === index) return this.append(value);

    const node = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    node.next = leader.next;
    leader.next = node;
    this.length++;
    return this;
  }

  delete(index) {
    const leader = this.traverseToIndex(index - 1);
    const nodeToDelete = this.traverseToIndex(index);
    leader.next = nodeToDelete.next;
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.print();
