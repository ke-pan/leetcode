/**
 * Given two strings S and T, determine if they are both one edit distance apart.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isOneEditDistance = function(s, t) {
  var S, T;
  if (s.length < t.length) {
    S = '^' + t;
    T = '^' + s;
  }
  else {
    S = '^' + s;
    T = '^' + t;
  }

  if (S.length - T.length > 1) return false;
  else if (T.length == 1) return true;

  if (S.length - T.length == 1) {
    for (var i = 1; i <= T.length; i++) {
      var j = 0;
      var k = 0;
      while (S[j] == T[k]) {
        j++;
        k++;
        if (j == i) j++;
        if (k == T.length) return true
      }
    }
    return false;
  }
  else {
    for (var i = 1; i < T.length; i++) {
      var j = 0;
      while (S[j] == T[j]) {
        j++;
        if (j == i) j++;
        if (j == T.length) return true
      }
    }
    return false;
  }
};

console.log(isOneEditDistance('', ''));
console.log(isOneEditDistance('', '1'));
console.log(isOneEditDistance('ab', 'ac'));
console.log(isOneEditDistance('bc', 'ac'));
console.log(isOneEditDistance('bd', 'ac'));
console.log(isOneEditDistance('a', 'ac'));
console.log(isOneEditDistance('ab', 'acb'));
console.log(isOneEditDistance('ad', 'acb'));
