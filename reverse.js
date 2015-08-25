/**
 * Reverse digits of an integer.
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var sign = 1;
  if (x < 0) {
    sign = -1;
    x = -x;
  }
  var y;
  var result = 0;
  while (true) {
    y = x % 10;
    if (result > 214748364 || result == 214748364 && y >= 8) {
      return 0;
    }
    result = result * 10 + y;
    if (x == y) break;
    x = (x - y) / 10;
  }
  return sign * result;
};

console.assert(reverse(0) == 0);
console.assert(reverse(1) == 1);
console.assert(reverse(124) == 421);
console.assert(reverse(100) == 1);
console.assert(reverse(-1) == -1);
console.assert(reverse(-100) == -1);
console.assert(reverse(-124) == -421);
