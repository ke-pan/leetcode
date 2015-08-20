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
  while (j < s.length) {
    if (h[s[j]]) {
      h[s[i]] = h[s[i]] - 1;
      i++;
      len--;
    }
    else {
      h[s[j]] = 1;
      j++;
      len++;
    }
    if (maxLen < len) maxLen = len;
  }
  return maxLen;
};

console.assert(lengthOfLongestSubstring('b') == 1);
console.assert(lengthOfLongestSubstring('bbb') == 1);
console.assert(lengthOfLongestSubstring('abcabcbb') == 3);
console.assert(lengthOfLongestSubstring('abba') == 2);
