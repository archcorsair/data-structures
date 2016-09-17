describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have all appropriate methods associated with DLL', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });
  // add to head test
  it('should add values to head', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToHead(3);
    expect(doublyLinkedList.head.value).to.equal(3);
  });
  // remove tail test
  it('should be able to remove tail', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(4);
  });

  it('should return the value of the tail when removing it', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.removeTail()).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublyLinkedList
  it('should find the last node with contains', function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.contains(3)).to.equal(true);
  });

  it('should find the first node with contains', function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.contains(1)).to.equal(true);
  });
  it('should return undefined when removing head from empty list', function() {
    expect(doublyLinkedList.removeHead()).to.equal(undefined);
  });

});
