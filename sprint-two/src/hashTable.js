

var HashTable = function() {
  this._limit = 8;
  this._occupied = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // If nothing at index, create empty bucket, otherwise get bucket.
  var bucket = this._storage.get(index) || [];
  // Look over items in the bucket
  var found = false;
  bucket.forEach(function(item, index) {
    // if key exists
    if (item[0] === k) {
      found = true;
      item[1] = v;
    }
  });
  // if key doesn't exist
  if (!found) {
    // add key and its coresponding value
    var item = [];
    item[0] = k;
    item[1] = v;
    bucket.push(item);
    this._occupied++;
  }

  this._storage.set(index, bucket);

  // Embedded grow check

  // is the 75% rule exceeded??? if it is, we must grow.
  if (this._occupied / this._limit >= 0.75) {
    this._grow();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // k is 'David'
  // grab the bucket
  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  }

  // go inside bucket
  return bucket.reduce(function(memo, item) {
    // look for key
    if (item[0] === k) {
      memo = item[1];
    }
    return memo;
  }, undefined);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // grab the bucket
  var bucket = this._storage.get(index);
  if (!bucket) { return undefined; }
  // check that the thing actually is there
  if (this.retrieve(k) !== undefined) {
    // Get index of our key
    var toDeleteIndex = bucket.reduce(function(memo, item, index) {
      if (item[0] === k) {
        memo = index;
      }
      return memo;
    }, -1);

    // if negative 1 comes out, its not there
    if (toDeleteIndex === -1) {
      return undefined;
    } else {
      // return value that we wanted to delete one last time
      return bucket.splice(toDeleteIndex, 1)[0][1];
    }
  } else {
    return undefined;
  }

};

HashTable.prototype._grow = function() {
  // need to resize when 75% of buckets are occupied
  this._limit = this._limit * 2;

  // make a new storage that's double the size of the old storage
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  // Reset occupied count for new storage
  this._occupied = 0;

  // go through old storage -- look in each bucket
  oldStorage.each(function(bucket) {
    for (var key in bucket) {
      var value = bucket[key];
      this.insert(key, value);
    }
  }.bind(this));
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
