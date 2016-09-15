

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

var GraphNode = function(value) {
  this.value = value;
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var newNode = new GraphNode(value);
  var key = JSON.stringify(value);
  this.nodes[key] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  return this.nodes.hasOwnProperty(JSON.stringify(value));
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  if (this.contains(value)) {
    // node exists, delete it
    delete this.nodes[JSON.stringify(value)];
    return value;
  } else {
    return undefined;
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNodeValue, toNodeValue) {
  var fromNode = this.getNode(fromNodeValue);
  var toNode = this.getNode(toNodeValue);
  return (fromNode.edges.indexOf(toNode) >= 0 && toNode.edges.indexOf(fromNode) >= 0);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNodeValue, toNodeValue) {
  var fromNode = this.getNode(fromNodeValue);
  var toNode = this.getNode(toNodeValue);
  fromNode.edges.push(toNode);
  toNode.edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

Graph.prototype.getNode = function (value) {
  // returns a node from a given input value
  // if node is not found, returns undefined
  if (!this.contains(value)) {
    return undefined;
  }
  var node = this.nodes[JSON.stringify(value)];
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


