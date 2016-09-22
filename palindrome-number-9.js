/**
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  var p = x,
      q = 0;

  while (p >= 10) {
    q = q * 10 + p % 10;
    p = Math.floor(p / 10);
  }

  return q === Math.floor(x / 10) && p === x % 10;
};

console.log(isPalindrome(100801));
