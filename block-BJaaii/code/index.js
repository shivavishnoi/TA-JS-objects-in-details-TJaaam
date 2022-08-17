class Stack {
  constructor() {
    this.arr = []
  }
  push(item) {
    this.arr.push(item)
  }
  pop() {
    this.arr.pop()
  }
  peek(index = this.arr.length - 1) {
    console.log(this.arr[index])
  }
  reverse() {
    return this.arr.reverse()
  }
  isEmpty() {
    return !Boolean(this.arr.length)
  }
  displayStack() {
    return this.arr.join("")
  }
  get length() {
    return this.arr.length
  }
}
// let myStack = new Stack();
// myStack.push('One');
// myStack.push('Two');
// console.log(myStack.length); // 2
// console.log(myStack.peek()); // "Two"
// console.log(myStack.peek(0)); // "One"
// console.log(myStack.reverse()); // ['Two', 'One']
// console.log(myStack.displayStack()); // 'Two One'
// myStack.pop();
// console.log(myStack.length); // 1
// console.log(myStack.peek()); // 'Two'
// console.log(myStack.isEmpty()); // false
// myStack.pop();
// console.log(myStack.isEmpty()); // true

class Queue {
  constructor() {
    this.arr = []
  }
  enqueue(item) {
    this.arr.push(item)
  }
  dequeue() {
    this.arr.shift()
  }
  peek(index = 0) {
    return this.arr[index]
  }
  isEmpty() {
    return !Boolean(this.arr.length)
  }
  displayQueue() {
    return this.arr.join(" ")
  }
  get length() {
    return this.arr.length
  }
}
let atmQueue = new Queue();
atmQueue.enqueue('Aman');
atmQueue.enqueue('John');
atmQueue.enqueue('Rohan');
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true