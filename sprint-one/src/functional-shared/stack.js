var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.container = {};
  storage.index = 0;
  _.extend(storage, stackMethods);

  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.container[this.index] = value;
  this.index++;
  return this.index - 1;
};

stackMethods.pop = function() {
  if (this.index === 0) {
    return undefined;
  }
  var removedItem = this.container[this.index - 1];
  this.index--;
  return removedItem;
};

stackMethods.size = function() {
  return this.index;
};
