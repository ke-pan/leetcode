/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  if (s === undefined) {
    return undefined;
  }
  if (s.length && s.length <= 0) {
    return '';
  }
  var result = '';
  for (var i = s.length; i >= 0; i -= 1) {
    result += s.charAt(i);
  }
  return result;
};

console.log(reverseString());
