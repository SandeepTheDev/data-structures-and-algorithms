class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Time complexity: O(1)
  push(value) {
    const newNode = new Node(value);
    if (this.top) {
      newNode.next = this.top;
      this.top = newNode;
    } else {
      this.top = newNode;
      this.bottom = newNode;
    }

    this.length++;
    return this;
  }

  // Time complexity: O(1)
  pop() {
    if (!this.top) return null;
    if (this.length === 1) {
      this.bottom = null;
    }

    const newTop = this.top.next;
    this.top.next = null;
    this.top = newTop;
    this.length--;
    return this;
  }

  // Time complexity: O(1)
  peek() {
    return this.top;
  }

  // Time complexity: O(1)
  isEmpty() {
    return this.length === 0;
  }

  print() {
    const arr = [];
    let currentNode = this.top;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }
}

const stack = new Stack();
stack.push("google.com");
stack.pop();
stack.print();
