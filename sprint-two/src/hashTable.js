

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get whats in the bucket already
  var bucketContents = this._storage.get(index) || {};
  // add my new value to the bucket
  bucketContents[k] = v;
  // put the whole thing back in the bucket
  this._storage.set(index, bucketContents);
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



/*
 * Complexity: What is the time complexity of the above functions?
 */


