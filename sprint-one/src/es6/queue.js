class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.container = {};
    this.enter = 0;
    this.exit = 0;
  }

  enqueue(value) {
    this.container[this.enter] = value;
    this.enter++;
  }

  dequeue() {
    if (this.exit === this.enter) {
      return undefined;
    }
    var element = this.container[this.exit];
    this.exit++;
    return element;
  }

  size() {
    return this.enter - this.exit;
  }

}
