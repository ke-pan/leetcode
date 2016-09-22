/**
 * https://leetcode.com/problems/zigzag-conversion/
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var i, j, p, q, odd,
      result = '';
  if (numRows === 1) {
    return s;
  }
  for (i=0; i<numRows; i++) {
    p = (numRows - (i + 1)) * 2;
    q = i * 2;
    j = i;
    odd = true;
    while(j < s.length) {
      result += s.charAt(j);
      if (p === 0) {
        odd = false;
      } else if (q === 0) {
        odd = true;
      }
      if (odd) {
        j += p;
      } else {
        j += q;
      }
      odd = !odd;
    }
  }
  return result;
};

console.log(convert('A', 1));
