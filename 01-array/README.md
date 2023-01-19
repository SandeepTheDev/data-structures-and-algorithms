# Array

Array is a collection of values (elements) stored in a contiguous memory locations.

![Array data structure](https://github.com/isandeepbansal/data-structures-and-algorithms/blob/main/assets/array.svg)

## Static vs Dynamic Arrays

Static arrays are fixed in size that means they required size of the array at the time creation. Dynamic arrays are not fixed in size they are flexible and the size of the array can be changed.

👉 In JavaScript Arrays are dynamic.

## Array operations

| Operations | Time complexity |
| ---------- | --------------- |
| `lookup`   | O(1)            |
| `push`     | O(1)            |
| `insert`   | O(n)            |
| `delete`   | O(n)            |

## Array Implementation

```js
class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // Time complexity: O(1)
  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }

  // Time complexity: O(1)
  get(index) {
    return this.data[index];
  }

  // Time complexity: O(1)
  pop() {
    if (this.length > 0) {
      const element = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return element;
    } else {
      return "Array is empty...";
    }
  }

  // Time complexity: O(n)
  delete(index) {
    if (this.data[index]) {
      const element = this.data[index];
      for (let i = index; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
      return element;
    } else {
      return "404 Not found 😭";
    }
  }
}
```
