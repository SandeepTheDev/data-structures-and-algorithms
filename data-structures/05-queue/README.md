# Queue

Queue follows the **First In First Out (FIFO)** rule - the item that goes in first is the item that comes out first. Example: Ticket counter queue.

![Linked list data structure](https://github.com/isandeepbansal/data-structures-and-algorithms/blob/main/assets/queue.webp)
_[Image source](https://cdn.programiz.com/sites/tutorial2program/files/queue.png)_

## Queue operations

| Operations | Time complexity |
| ---------- | --------------- |
| `enqueue`  | O(1)            |
| `dequeue`  | O(1)            |
| `peek`     | O(1)            |

## Applications of queue

- CPU scheduling, Disk Scheduling

## Queue implementation

Queue can be implemented by using both **array** and **linked list**, but its not a good idea to implement it via array because arrays do shifting when element is removed from beginning or somewhere middle.

## Question

- Implement queue using stacks
