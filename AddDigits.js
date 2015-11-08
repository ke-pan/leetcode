/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num / 10 < 1) {
    return num;
  }
  var sum = num % 10;
  num = num - sum;
  while (num !== 0) {
    num = num / 10;
    digit = num % 10;
    sum += digit; 
    num = num - digit;
  }
  return addDigits(sum);
};


console.assert(addDigits(21) == 3)
console.assert(addDigits(38) == 2)
console.assert(addDigits(596) == 2)
console.assert(addDigits(1) == 1)