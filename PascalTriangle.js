/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var result = [];
  for (var i = 0; i < numRows; i++) {
    var level = [];
    for (var j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        level[j] = 1;
      } else {
        level[j] = result[i-1][j] + result[i-1][j-1];
      }
    }
    result.push(level)
  }
  return result;
};

console.log(generate(5))