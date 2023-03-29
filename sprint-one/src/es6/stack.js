class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.container = {};
    this.index = 0;
  }

  push(value) {
    this.container[this.index] = value;
    this.index++;
    return this.index - 1;
  }

  pop() {
    if (this.index === 0) {
      return undefined;
    }
    var removedItem = this.container[this.index - 1];
    this.index--;
    return removedItem;
  }

  size() {
    return this.index;
  }
}