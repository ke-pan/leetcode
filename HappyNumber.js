/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  function sumOfSquareOfDigits(num) {
    var sum = 0;
    while(num !== 0) {
      var digit = num % 10;
      num = (num - digit) / 10;
      sum += digit * digit;
    }
    return sum;
  }
  
  if (n <= 0) { return false; } 
  
  var set = new Set();
  
  while (n !== 1) {
    set.add(n);
    n = sumOfSquareOfDigits(n);
    if (set.has(n)) {
      return false;
    }
  }
  return true;
};

console.assert(isHappy(19))