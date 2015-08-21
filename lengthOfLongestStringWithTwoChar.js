/**
 * Question:
 * Given a string S, find the length of the longest substring T that contains at most two distinct characters.
 * For example,
 * Given S = “eceba”,
 * T is "ece" which its length is 3.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringWithTwoChar = function(s) {
  var
    i = 0,
    j = 0,
    len = 0,
    maxLen = 0,
    lastCharIndex = 0,
    chars = [];
  for (j = 0; j < s.length; j++) {
    if (s[j] !== s[j - 1] && j != 0) {
      lastCharIndex = j;
      if (chars.indexOf(s[j]) == -1) {
        chars = [s[j - 1], s[j]];
        i = lastCharIndex;
      }
    }
    len = j - i + 1;
    if (maxLen < len) maxLen = len;
  }
  return maxLen;
};

console.assert(lengthOfLongestSubstringWithTwoChar('') == 0);
console.assert(lengthOfLongestSubstringWithTwoChar('b') == 1);
console.assert(lengthOfLongestSubstringWithTwoChar('bbb') == 3);
console.assert(lengthOfLongestSubstringWithTwoChar('abcabcbb') == 3);
console.assert(lengthOfLongestSubstringWithTwoChar('abba') == 3);
