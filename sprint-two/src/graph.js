

// Instantiate a new graph
var Graph = function() {
  this.container = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //create var object for node
  var objNode = {};
  //add node to object
  objNode.value = node;
  //
  objNode.edges = [];
  //push node object into container array
  this.container.push(objNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //for each item in container
  for (var i = 0; i < this.container.length; i++) {
    //if object value is equal to node
    if (this.container[i].value === node) {
      //return true
      return true;
    }
  }
  //return false
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //apply filter function to container
  this.container = this.container.filter(function(currentNode) {
    return currentNode.value !== node;
  });

  _.each(this.container, function(currentNode) {
    currentNode.edges = currentNode.edges.filter(function(eachEdge) {
      return eachEdge !== node;
    });
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromIndex;
  //for each item in container
  for (var i = 0; i < this.container.length; i++) {
    if (this.container[i].value === fromNode) {
      fromIndex = i;
    }
  }
  //if fromNode's edges array contains toNode value
  return this.container[fromIndex].edges.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromIndex, toIndex;
  //for each item in container
  for (var i = 0; i < this.container.length; i++) {
    if (this.container[i].value === fromNode) {
      fromIndex = i;
    }
    if (this.container[i].value === toNode) {
      toIndex = i;
    }
  }
  //add toNode to fromNode's edges array
  this.container[fromIndex].edges.push(toNode);
  //add fromNode to toNodes's edges array
  this.container[toIndex].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromIndex, toIndex;
  //for each item in container
  for (var i = 0; i < this.container.length; i++) {
    if (this.container[i].value === fromNode) {
      fromIndex = i;
    } else if (this.container[i].value === toNode) {
      toIndex = i;
    }
  }

  // remove toNode to fromNode's edges array
  this.container[fromIndex].edges = this.container[fromIndex].edges.filter(function(currentEdge) {
    return currentEdge !== toNode;
  });
  // remove fromNode to toNodes's edges array
  this.container[toIndex].edges = this.container[toIndex].edges.filter(function(currentEdge) {
    return currentEdge !== fromNode;
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(callback) {
  // for (var i = 0;  i < this.container.length; i++) {
  //   callback(this.container[i]);
  // }
  return _.each(this.container, function(node) {
    callback(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


