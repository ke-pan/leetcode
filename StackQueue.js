/**
 * @constructor
 */
var Queue = function() {
  function Stack() {
    var _arr = [];
    var _num = 0;
    this.push = function(n) {
      _num++;
      _arr.push(n);
    }
    this.pop = function() {
      if(_num > 0) {
        _num--;
        _arr.pop();
      }
    }
    this.peek = function() {
      return _arr[_num-1]
    }
    this.empty = function() {
      return _num === 0;
    }
  }
  this.inputStack = new Stack();
  this.outputStack = new Stack();
  
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
  this.inputStack.push(x)
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
  if(this.outputStack.empty()) {
    while(!this.inputStack.empty()) {
      this.outputStack.push(this.inputStack.peek());
      this.inputStack.pop();
    }
  }
  this.outputStack.pop()
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  if(this.outputStack.empty()) {
    while(!this.inputStack.empty()) {
      this.outputStack.push(this.inputStack.peek());
      this.inputStack.pop();
    }
  }
  return this.outputStack.peek()
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return this.inputStack.empty() && this.outputStack.empty();
};

var q = new Queue();

q.push(1)
q.push(2)
q.push(3)
console.assert(q.peek() == 1)
q.pop()
q.pop()
q.push(4)
console.assert(q.peek() == 3)
q.pop()
console.assert(!q.empty())