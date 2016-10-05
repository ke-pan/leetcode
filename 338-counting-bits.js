/**
 * https://leetcode.com/problems/counting-bits/
 *
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var result = []
  for (var i = 0; i <= num; i++) {
    if (i === 0) result.push(0);
    else if (i === 1) result.push(1);
    else if (i % 2 === 0) result.push(result[i / 2]);
    else result.push(result[(i - 1) / 2] + 1);
  }
  return result;
};

console.log(countBits(5));
