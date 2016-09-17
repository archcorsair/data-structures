var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    firstIndex: 0,
    lastIndex: 0,
    values: {}
  };
  extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  size: function() {
    return this.lastIndex - this.firstIndex;
  },
  enqueue: function(value) {
    this.values[this.lastIndex] = value;
    this.lastIndex++;
  },
  dequeue: function() {
    if (this.size()) {
      var result = this.values[this.firstIndex];
      delete this.values[this.firstIndex];
      this.firstIndex++;
      return result;
    }
  }
};

var extend = function(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }
};

// Performance Profile:
// 100k instansiations
// 19 ms
