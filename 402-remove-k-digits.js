/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  var remainLength = num.length - k;
  if (remainLength <= 0) return "0";

  var start = 0;
  var result = '';
  var found = 0;
  for (var i = 0; i < remainLength; i++) {
    found = findSmall(start, num, remainLength - i)
    result += num.charAt(found);
    start = found + 1;
  }
  return removePaddingZero(result);

  function findSmall(start, num, length) {
    var smallest = 10, digit, result = start;
    for (var i = start; i < num.length - length + 1; i++) {
      digit = parseInt(num[i]);
      if (digit < smallest) {
        smallest = digit;
        result = i;
      }
    }
    return result;
  }

  function removePaddingZero(str) {
    var i = 0;
    while (i < str.length - 1 && str[i] === '0') {
      i++;
    }
    return str.slice(i);
  }
};

console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
console.log(removeKdigits("10", 1));
