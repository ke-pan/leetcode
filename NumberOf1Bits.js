/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var count = 0;
  while(n) {
    count += n & 1;
    n >>>= 1
  }
  return count;
};

console.log(hammingWeight(2147483648))