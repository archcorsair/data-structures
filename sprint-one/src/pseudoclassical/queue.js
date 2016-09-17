var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.firstIndex = 0;
  this.lastIndex = 0;
  this.values = {};
};

Queue.prototype.size = function() {
  return this.lastIndex - this.firstIndex;
};
Queue.prototype.enqueue = function(value) {
  this.values[this.lastIndex] = value;
  this.lastIndex++;
};
Queue.prototype.dequeue = function() {
  if (this.size()) {
    var result = this.values[this.firstIndex];
    delete this.values[this.firstIndex];
    this.firstIndex++;
    return result;
  }
};

// Performance Profile:
// 100k instansiations
// 6 ms
