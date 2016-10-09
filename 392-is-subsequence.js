/**
 * https://leetcode.com/problems/is-subsequence/
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length > t.length) return false;
  var i = 0, j = 0;

  while (i < s.length && j < t.length) {
    if (s.charAt(i) === t.charAt(j)) i++;
    j++;
  }

  if (i === s.length) return true;
  return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("aec", "ahbgdc"));
