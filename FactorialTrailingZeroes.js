/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var result = 0;
  var d = 5;
  var m = 1;
  while (true) {
      var t = Math.floor(n / (d * m));
      if (t === 0) break;
      result += t;
      m *= 5;
  }
  return result;
};