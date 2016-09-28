/**
 * https://leetcode.com/problems/longest-common-prefix/
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  var result = strs[0];
  for (var i = 1; i < strs.length; i++) {
    result = findCommonPrefix(result, strs[i]);
  }
  return result;

  function findCommonPrefix(s1, s2) {
    var result = '';
    for (var i = 0; i < s1.length && i < s2.length; i++) {
      if (s1[i] !== s2[i]) break;
      result += s1[i];
    }
    return result;
  }
};

console.log(longestCommonPrefix(['aca', 'cba']));
