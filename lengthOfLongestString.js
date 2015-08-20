/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var
    i = 0,
    j = 0,
    len = 0,
    maxLen = 0,
    h = {};
  for (; j < s.length; j++) {
    if (h[s[j]] >= i) {
      i = h[s[j]] + 1;
    }
    h[s[j]] = j;
    len = j - i + 1;
    if (maxLen < len) maxLen = len;
  }
  return maxLen;
};

console.assert(lengthOfLongestSubstring('b') == 1);
console.assert(lengthOfLongestSubstring('bbb') == 1);
console.assert(lengthOfLongestSubstring('abcabcbb') == 3);
console.assert(lengthOfLongestSubstring('abba') == 2);
