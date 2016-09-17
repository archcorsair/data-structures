var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.values = {};
  return someInstance;
};

var stackMethods = {
  size: function() {
    return this.count;
  },
  push: function(value) {
    this.values[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.size()) {
      this.count--;
      var result = this.values[this.count];
      delete this.values[this.count];
      return result;
    }
  }
};


// Performance Profile:
// 100k instansiations
// 20 ms
