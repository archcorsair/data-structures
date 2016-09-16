

var HashTable = function() {
  this._limit = 8;
  this._occupied = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketContents = this._storage.get(index) || {};
  if (!Object.getOwnPropertyNames(bucketContents).length) {
    this._occupied++;
  }
  // add my new value to the bucket
  bucketContents[k] = v;
  // put the whole thing back in the bucket
  this._storage.set(index, bucketContents);
  // is the 75% rule exceeded??? if it is, we must grow.
  if (this._occupied / this._limit >= 0.60 && arguments[2] !== 'growing') {
    console.log('I am growing');
    console.log(arguments[2]);
    this._storage = this._grow();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get whats in the bucket
  var bucketContents = this._storage.get(index);
  // return the value of the input key
  return bucketContents[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get whats in the bucket already
  var bucketContents = this._storage.get(index);
  delete bucketContents[k];
};

HashTable.prototype._grow = function() {
  console.dir(this);
  // need to resize when 75% of buckets are occupied
  this._limit = this._limit * 2;

  // make a new storage that's double the size of the old storage
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  this._occupied = 0;

  // go through old storage -- look in each bucket
  oldStorage.each(function(bucket) {
    for (var key in bucket) {
      var value = bucket[key];
      this.insert(key, value, 'growing');
    }
  }.bind(this));
  debugger;
  // losing this._storage once this function exits
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


