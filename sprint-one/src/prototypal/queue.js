var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.firstIndex = 0;
  someInstance.lastIndex = 0;
  someInstance.values = {};
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

// Performance Profile:
// 100k instansiations
// 12 ms
