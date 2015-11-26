/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var result = [];
  
  for (var i = 0; i <= rowIndex; i++) {
    for (var j = i; j >= 0; j--) {
      if (j == 0 || j == i) {
        result[j] = 1;
      } else {
        result[j] = result[j] + result[j-1]; 
      }
    }
  }
  return result;
};

console.log(getRow(4))