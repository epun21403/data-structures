var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enter = 0;
  var exit = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enter] = value;
    enter++;
  };

  someInstance.dequeue = function() {
    if (exit === enter) {
      return undefined;
    }
    var element = storage[exit];
    exit++;
    return element;
  };

  someInstance.size = function() {
    return enter - exit;
  };

  return someInstance;
};
