var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    count: 0,
    values: {}
  };
  extend(someInstance, stackMethods);
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
      return this.values[this.count];
    }
  }
};

var extend = function(target, source) {
  for (const key in source) {
    target[key] = source[key];
  }
};


