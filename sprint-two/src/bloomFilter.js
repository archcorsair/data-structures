var HashFunctionGenerator = function(k, max) {
  this.k = k;
  this.max = max;
  this.bitwiseScrambleHash = function(shiftAmount, max, str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << shiftAmount) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  }
};

// Hash Function Generator
HashFunctionGenerator.prototype.generate = function() {
  var k = this.k;
  var max = this.max;
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(this.bitwiseScrambleHash.bind(null, i, max));
  }
  return result;
};

var BloomFilter = function(k, max) {
  this.k = k;
  this.max = max;
  this._storage = [];

  for (let i = 0; i < this.max; i++) {
    this._storage.push(false);
  }

  var hashMaker = new HashFunctionGenerator(this.k, this.max);
  this._hashFunctions = hashMaker.generate();

}

BloomFilter.prototype.add = function(key) {
  this._hashFunctions.forEach(function(hashFunction){
    this._storage[hashFunction(key)] = true;
  }.bind(this));
};

BloomFilter.prototype.check = function(key) {
  return this._hashFunctions.reduce(function(memo, hashFunction) {
    if (!this._storage[hashFunction(key)]) {
      memo = false;
    }
    return memo;
  }.bind(this), true);
};
