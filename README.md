# Introduction

Computer science is all about problem solving.

![Problem Solving](https://github.com/SandeepTheDev/data-structures-and-algorithms/blob/main/assets/problem-solving.svg)

Understanding Data Structures & Algorithms is vital for writing efficient computer programs.

**Algorithm is a set of steps a program takes to complete a task**. and **Data structures are used for storing and organizing data in computer memory so that it can be used efficiently**. Data structures can be **linear** and **non-linear**.

## 1. Array Data structure

Array is a collection of values (elements) stored in a contiguous memory locations.

![Array data structure](https://github.com/SandeepTheDev/data-structures-and-algorithms/blob/main/assets/array.svg)

### Static vs Dynamic Arrays

Static arrays are fixed in size that means they required size of the array at the time creation. Dynamic arrays are not fixed in size they are flexible and the size of the array can be changed.

👉 In JavaScript Arrays are dynamic.

### Array operations

| Operations                | Time complexity |
| ------------------------- | --------------- |
| `search`                  | O(n)            |
| `lookup`                  | O(1)            |
| `push`                    | O(1)            |
| `insert` (shift, unshift) | O(n)            |
| `delete`                  | O(n)            |

### Array problems

1. [Reverse string: create a function that reverses a string](https://github.com/SandeepTheDev/data-structures-and-algorithms/blob/main/data-structures/01-array/exercise/reverse-string.js)

2. [Merge sorted array: write a function that merge two sorted array of integers](https://github.com/SandeepTheDev/data-structures-and-algorithms/blob/main/data-structures/01-array/exercise/merge-sorted-array.js)

## 2. Hash table Data structure

Hash table is a data structure that consists a **key** - **value** pair. **Hash function** is a function that generate a **hash value** or **hash** for a **key** to store and retrieve the corresponding data (value). Hash function takes a **key** as input and generates a memory location where data is stored. **Unlike array hash table's elements are not stored in contiguous memory location**.

![Hash table data structure](https://github.com/SandeepTheDev/data-structures-and-algorithms/blob/main/assets/hash-table.svg)

- In Javascript object keys are always string.

- Javascript's **Map** allows any data type as a key.

### Hash table collision

Hash tables are initialized with some size and sometimes collision occurs when hash function generates the same hash (memory address) for more than one key. When collision occurs accessing a key can be O(n).

## 3. Linked list Data structure

Linked list is a **linear data structure**, unlike arrays the **elements are not stored in contiguous memory locations**. Linked list consist of **nodes**, and each node has a **value** and **reference** to next node or null.

![Linked list data structure](https://github.com/SandeepTheDev/data-structures-and-algorithms/blob/main/assets/linked-list.svg)

### Linked list operations

| Operations | Time complexity |
| ---------- | --------------- |
| `append`   | O(1)            |
| `prepend`  | O(1)            |
| `insert`   | O(n)            |
| `delete`   | O(n)            |

## 4. Stack Data structure

Stack is a linear data structure that follows the principle of **LIFO (Last in First Out)**. This means the last element inserted inside the stack is removed first. Example: browser history.

![Stack data structure](https://github.com/SandeepTheDev/data-structures-and-algorithms/blob/main/assets/stack.svg)

### Stack operations

| Operations | Time complexity |
| ---------- | --------------- |
| `pop`      | O(1)            |
| `push`     | O(1)            |
| `peek`     | O(1)            |

### Application of stack

- Undo/Redo
- Browser history
- String reversal

### Stack implementation

Both **array** and **linked list** is great choice for implementing stack. Arrays gives sequence memory benefit, linked list provide dynamic memory allocation but they are not stored sequence in memory.
