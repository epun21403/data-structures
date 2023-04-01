var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //if storage of item is undefined
  if (this._storage.item === undefined) {
    //add item to storage
    this._storage.item = item;
  }
};

setPrototype.contains = function(item) {
  //if storage has item key not equal to undefined return true, otherwise return false
  return this._storage.item !== undefined;
};

setPrototype.remove = function(item) {
  //if storage of item is not undefined
  if (this._storage.item !== undefined) {
    //delete item from storage
    delete this._storage.item;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
