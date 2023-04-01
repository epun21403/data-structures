// functional with shared methods style

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // an array containing a number of subtrees
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};
//method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function(value) {
  // takes any value, sets that as the target of a node
  var newNode = Tree(value);

  // adds that node as a child of the tree
  this.children.push(newNode);
};

//method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {

  var helper = function(treeNode) {
    // base case
    if (treeNode.value === target) {
      return true;
    }

    var result = false;
    _.each(treeNode.children, function(childNode) {
      if (helper(childNode)) {
        result = helper(childNode);
      }
    });

    return result;
  };

  return helper(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

