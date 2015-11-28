/**
 * @constructor
 */
var Stack = function() {
  
  function Queue() {
    var arr = [];
    this.push = function(x) {
      arr.push(x);
    }
    this.pop = function() {
      arr.shift()
    }
    this.peek = function() {
      return arr[0]
    }
    this.size = function() {
      return arr.length
    }
    this.empty = function() {
      return this.size() === 0
    }
  }
  
  this.Queue1 = new Queue();
  this.Queue2 = new Queue();
    
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
  if (this.Queue1.empty()) {
    console.log('push queue1')
    this.Queue1.push(x)
    while(!this.Queue2.empty()) {
      this.Queue1.push(this.Queue2.peek())
      this.Queue2.pop()
    }
  } else {
    console.log('push queue2')
    this.Queue2.push(x)
    while(!this.Queue1.empty()) {
      this.Queue2.push(this.Queue1.peek())
      this.Queue1.pop()
    }
  }
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  if (this.Queue1.empty()) {
    this.Queue2.pop()
  } else {
    this.Queue1.pop()
  }
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  if (this.Queue1.empty()) {
    return this.Queue2.peek()
  } else {
    return this.Queue1.peek()
  }
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.Queue1.empty() && this.Queue2.empty()
};

var stack = new Stack();

stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.top())
stack.pop()
console.log(stack.top())
