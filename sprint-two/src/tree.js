var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var found;
  if (arguments[1] === undefined) {
    found = false;
  } else {
    found = arguments[1];
  }
  // Look over the children
  this.children.forEach(function(child) {
    // With each child
      // If value matches
    if (child.value === target) {
      found = true;
    } else {
      // If doesn't; recurse
      found = child.contains(target, found);
    }
  });
  // Otherwise return false
  return found;
};

var extend = function(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

    addChild: O(1)
    contains: O(N)

 */
