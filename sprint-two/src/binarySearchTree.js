var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};


BinarySearchTree.prototype.insert = function(value) {
  var newTree = BinarySearchTree(value);
  var currentNode = this;
  if (newTree.value < currentNode.value) {
    // less than case
    if (!currentNode.left) {
      // there is no left value
      currentNode.left = newTree;
    } else {
      // if there is a left value
      // recursively call the insert with value on that left node
      currentNode.left.insert(value);
    }
  } else {
    // greater than case
    if (!currentNode.right) {
      // there is no left value
      currentNode.right = newTree;
    } else {
      // if there is a left value
      // recursively call the insert with value on that left node
      currentNode.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var currentNode = this;
  if (value === currentNode.value) {
    return true;
  } else if (value < currentNode.value) {
    // less than case (left case)
    if (!currentNode.left) { return false; }
    return currentNode.left.contains(value);
  } else {
    // greater than case (right case)
    if (!currentNode.right) { return false; }
    return currentNode.right.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
