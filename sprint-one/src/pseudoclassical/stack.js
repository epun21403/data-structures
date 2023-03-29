var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.container = {};
  this.index = 0;
};

Stack.prototype.push = function(value) {
  this.container[this.index] = value;
  this.index++;
  return this.index - 1;
};

Stack.prototype.pop = function() {
  if (this.index === 0) {
    return undefined;
  }
  var removedItem = this.container[this.index - 1];
  this.index--;
  return removedItem;
};

Stack.prototype.size = function() {
  return this.index;
};


