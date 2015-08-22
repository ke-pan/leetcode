/**
 *Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
 */

/**
 * @param {string} s
 * @return {string}
 */

// Manacher's Algorithm :
// http://articles.leetcode.com/2011/11/longest-palindromic-substring-part-ii.html
var longestPalindrome = function(s) {
  var P = [];
  var T = preProcess(s);
  var R = 0;
  var C = 0;
  for (var i = 1; i < T.length - 1; i++) {
    i_mirror = 2 * C - i;
    P[i] = i < R ? Math.min(P[i_mirror], R - i) : 0;
    while (T[i + 1 + P[i]] == T[i - 1 - P[i]]) P[i]++;
    if (P[i] > R - i) {
      R = i + P[i];
      C = i;
    }
  }
  var maxLen = 0;
  var index = 1;
  for (i = 1; i < T.length - 1; i++) {
    if (P[i] > maxLen) {
      maxLen = P[i];
      index = i;
    }
  }
  // console.log(P, maxLen, index, T);
  var result = '';
  for (var j = index - maxLen + 1; j < index + maxLen; j = j + 2) {
    result += T[j];
  }
  return result;
};

var preProcess = function(s) {
  var ret = '^#';
  for (var i = 0; i < s.length; i++) {
    ret = ret + s[i] + '#';
  }
  return ret + '$';
}

console.log(longestPalindrome('a'));
console.log(longestPalindrome('abbac'));
console.log(longestPalindrome('abcddcbe'));
console.log(longestPalindrome('abcddcbeexfe'));
var time = Date.now();
console.log(longestPalindrome(
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabpaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
));
time = Date.now() - time;
console.log(time);
