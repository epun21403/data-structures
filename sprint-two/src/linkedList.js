var LinkedList = function() {
  var list = {}; // type is object
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a node by calling Node()
    var newTail = Node(value);

    // change the references
    // if the list has no nodes
    if (list.head === null && list.tail === null) {
      // both head and tail will be newTail
      list.head = newTail;
      list.tail = newTail;

      // if the list if not empty
    } else {
      var oldTail = list.tail;
      // connect oldTail with the new one
      oldTail.next = newTail;
      // list.tail connect to the new one
      list.tail = newTail;
    }
  };

  list.removeHead = function() {
    // connect list.head to new node for head
    var oldHead = list.head;
    list.head = oldHead.next;

    // return the removed node's value
    return oldHead.value;
  };

  // returns boolean reflecting whether or not the passed-in value is in the linked list
  list.contains = function(target) {

    // using recursion
    // returns a boolean indicating if we find the target
    var helper = function(node) {

      // base case: find target
      if (node.value === target) {
        return true;
      }

      // recursive case
      if (node.next !== null) {
        return helper(node.next);
      }

      // when we didn't find the target
      return false;
    };

    return helper(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null; // refrence

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * contains() : linear O(n)
 * addToTail(): constant
 * removeHead(): constant
 */


