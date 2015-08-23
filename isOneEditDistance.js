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
    S = t;
    T = s;
  }
  else {
    S = s;
    T = t;
  }

  if (S.length - T.length > 1) return false;
  var i, j, err;
  if (S.length - T.length == 1) {
    for (i = 0, j = 0, err = 0; i < T.length && err < 2; i++, j++) {
      if (S[j] != T[i]) {
        i--;
        err++;
      }
    }
  }
  else {
    for (i = 0, err = 0; i < T.length && err < 2; i++) {
      if (S[i] != T[i]) {
        err++;
      }
    }
  }
  if (err == 2) return false
  else return true;
};

console.log(isOneEditDistance('', ''));
console.log(isOneEditDistance('', '1'));
console.log(isOneEditDistance('ab', 'ac'));
console.log(isOneEditDistance('bc', 'ac'));
console.log(isOneEditDistance('bd', 'ac'));
console.log(isOneEditDistance('a', 'ac'));
console.log(isOneEditDistance('ab', 'acb'));
console.log(isOneEditDistance('ad', 'acb'));
