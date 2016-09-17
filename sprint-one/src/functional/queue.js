var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var highIndex = 0;
  var lowIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[highIndex] = value;
    highIndex++;
    return value;
  };

  someInstance.dequeue = function() {
    if (someInstance.size()) {
      var result = storage[lowIndex];
      delete storage[lowIndex];
      lowIndex++;
      return result;
    }
  };

  someInstance.size = function() {
    return highIndex - lowIndex;
  };

  return someInstance;
};

// Performance Profile:
// 100k instansiations
// 120 ms
