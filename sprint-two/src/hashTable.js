

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // if storage at index is undefined
  if (this._storage.get(index) === undefined) {
    // push both key and value into empty array
    var array = [];
    array.push([k, v]);
    this._storage.set(index, array);
  } else {
    // get the current value, should be an array
    var bucket = this._storage.get(index);
    // push new key-value into bucket
    bucket.push([k, v]);
    // set the updated bucket to be value
    this._storage.set(index, bucket);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // console.log(this._storage.get(index));
  // var result = this._storage.get(index);

  // return result === undefined ? undefined : result[0];


  // this._storage.get(index) -> array contains all the key-value pairs at this index
  // [[k1, v1], [k2, v2]]
  var result;
  console.log(this._storage.get(index));
  this._storage.get(index).forEach(function(keyValuePair) {
    if (keyValuePair[0] === k) {
      result = keyValuePair[1];
    }
  });
  return result;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.set(ixnde, undefined);


  // this._storage.get(index) -> array contains all the key-value pairs at this index
  // [[k1, v1], [k2, v2]]

  //for each bucket
  //if bucket is not undefined and bucket key is equal to k

  var newArray = this._storage.get(index).filter(function(bucket) {
    return bucket[0] !== k;
  });
  this._storage.set(index, newArray);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


