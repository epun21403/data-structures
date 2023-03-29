var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
    return index - 1;
  };

  someInstance.pop = function() {
    if (index === 0) {
      return undefined;
    }
    var removedItem = storage[index - 1];
    index--;
    return removedItem;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
