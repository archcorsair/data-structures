var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
    return value;
  };

  someInstance.pop = function() {
    if (counter) {
      counter--;
      var result = storage[counter];
      delete storage.counter;
      return result;
    } else {
      return undefined;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};


// Performance Profile:
// 100k instansiations
// 112 ms
