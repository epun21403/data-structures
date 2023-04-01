var BinarySearchTree = function(value) {
  var tree = Object.create(bstMethods);
  tree.value = value; // root
  tree.left = undefined;
  tree.right = undefined;

  return tree;
};

bstMethods = {};

bstMethods.insert = function(value) {
  //if this.value is greater than value
  if (this.value > value) {

    //if this.left is equal to null
    if (this.left === undefined) {
      // this.left is equal to BST(value)
      this.left = BinarySearchTree(value);
    //else
    } else {
      // recursion
      // call insert() on left node
      this.left.insert(value);
    }
  }
  //if this.value is less than value
  if (this.value < value) {
    //if this.right is equal to null
    if (this.right === undefined) {
      //return this.right is equal to BST(value)
      this.right = BinarySearchTree(value);
    //else
    } else {
      this.right.insert(value);
    }
  }

};

bstMethods.contains = function(value) {
  // base case
  //if this.value equals value
  if (this.value === value) {
    //return true
    return true;
  }

  //if this.value is greater than value
  if (this.value > value) {
    if (this.left !== undefined) {
    //apply contains function on this.left
      return this.left.contains(value);
    }
    //else if this .value is less than value
  } else if (this.value < value) {
    if (this.right !== undefined) {
    //apply caontains function on this.right
      return this.right.contains(value);
    }
  }

  //return false
  return false;
};

bstMethods.depthFirstLog = function(callback) {

  // base case
  //apply callback on root value
  callback(this.value);

  // recursive case
  //if this.left is not undefined
  if (this.left !== undefined) {
    //apply depthFirst on this.left(value)
    this.left.depthFirstLog(callback);
  }
  //if this.right is not undefined
  if (this.right !== undefined) {
    //apply depthFirst on this.right(value)
    this.right.depthFirstLog(callback);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
