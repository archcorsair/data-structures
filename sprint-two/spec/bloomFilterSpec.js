describe('Bloom Filter', function(){

  describe('hash function generator', function hashGeneratorTest(){
    var hashFunctions;
    beforeEach(function(){
      var k = 3; // number of hash functions to generate
      var max = 20;
      var hashMaker = new HashFunctionGenerator(k, max);
      hashFunctions = hashMaker.generate();
    });

    it('should produce an array of length \'k\'', function(){
      expect(hashFunctions).to.be.a('array');
      expect(hashFunctions.length).to.equal(3);
    });

    it('should produce numbers when invoking each hash function', function numbersTest(){
      hashFunctions.forEach(function hashForEach(hashFunction) {
        var result = hashFunction('input');
        expect(result).to.not.equal(NaN);
        expect(result).to.be.a('number');
      });
    });
  });

  describe('the bloom filter itself', function(){
    var bloomFilter;
    beforeEach(function() {
      var k = 3;
      var max = 20;
      bloomFilter = new BloomFilter(k, max);
    });

    it('should have the expected properties and methods', function() {
      expect(bloomFilter.add).to.be.a('function');
      expect(bloomFilter.check).to.be.a('function');
      expect(bloomFilter.k).to.be.a('number');
      expect(bloomFilter.max).to.be.a('number');
      expect(bloomFilter._storage).to.be.a('array');
      expect(bloomFilter._hashFunctions).to.be.a('array');
    });

    it('should have hashFunctions that are functions', function(){
      var randHashFunctionIndex = Math.floor(Math.random() * bloomFilter.k);
      expect(bloomFilter._hashFunctions[randHashFunctionIndex]).to.be.a('function');
    });

    it('should have a storage of length max', function(){
      expect(bloomFilter._storage.length).to.equal(bloomFilter.max);
    });

    it('should have boolean values in each storage cell', function(){
      bloomFilter._storage.forEach(function(cell){
        expect(cell).to.be.a('boolean');
      });
    });

    it('add should introduce "true" values into storage', function() {
      bloomFilter.add('key');
      // Look over all values in storage - see if any are true
      expect(bloomFilter._storage.some(function(cell){
        return cell;
      })).to.equal(true);
    });

    it('checking an existing key returns true', function() {
      bloomFilter.add('key');
      expect(bloomFilter.check('key')).to.equal(true);
    });

    it('checking a non-existant key returns false (at first)', function() {
      bloomFilter.add('key');
      expect(bloomFilter.check('somethingelse')).to.equal(false);
    });


  });

  describe('False positive trials', function() {
    var bloomFilter;
    var numKeysInFilter;
    var numTotalKeys;
    beforeEach(function() {
      var k = 3;
      var max = 18;
      bloomFilter = new BloomFilter(k, max);
    });

    it('should return the number of false positives', function() {
      expect(bloomFilter.trial(10, 20)).to.be.within(0,20);
    });

  });

});
