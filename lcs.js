/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var lcs = function(s, t) {
  s = '^' + s;
  t = '^' + t;
  var c = [];
  for (var i = 0; i < t.length; i++) c[i] = 0;
  var d = 0;
  var e;
  for (var i = 1; i < s.length; i++) {
    console.log(c);
    for (var j = 1; j < t.length; j++) {
      e = c[j];
      if (s[i] == t[j]) {
        c[j] = d + 1;
      }
      else {
        c[j] = Math.max(c[j - 1], c[j])
      }
      d = e;
    }
  }
  console.log(c);
  return c[t.length - 1];
}

console.log(lcs('abcd', 'ace'));
console.log(lcs('abcd', 'acbcde'));
