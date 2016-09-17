var createStack = function createStack() {
  var newFunctionalStack = Stack();
};

var createQueue = function createQueue() {
  var newFunctionalQueue = Queue();
};

var counter1 = 100000;
var counter2 = 100000;

var profiler1 = function stackProfilerFunction() {
  while (counter1 > 0) {
    createStack();
    counter1--;
  }
};

var profiler2 = function queueProfilerFunction() {
  while (counter2 > 0) {
    createQueue();
    counter2--;
  }
};

profiler1();
profiler2();
