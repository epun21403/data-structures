var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var container = storage.container = {};
  var enter = storage.enter = 0;
  var exit = storage.exit = 0;
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.container[this.enter] = value;
  this.enter++;
};
queueMethods.dequeue = function() {
  if (this.exit === this.enter) {
    return undefined;
  }
  var element = this.container[this.exit];
  this.exit++;
  return element;
};

queueMethods.size = function() {
  return this.enter - this.exit;
};

