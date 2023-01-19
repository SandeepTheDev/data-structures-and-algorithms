class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Time complexity: O(1)
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length > 0) {
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // Time complexity: O(1)
  dequeue() {
    if (!this.first) return null;
    if (this.length === 1) {
      this.last = null;
    }

    const newFirst = this.first.next;
    this.first.next = null;
    this.first = newFirst;
    this.length--;
    return this;
  }

  // Time complexity: O(1)
  peek() {
    return this.first;
  }

  print() {
    let currentNode = this.first;
    let arr = [];
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr);
  }
}

const queue = new Queue();
queue.enqueue("Nik");
queue.enqueue("Sam");
queue.enqueue("Sandy");
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
