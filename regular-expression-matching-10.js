/**
 * https://leetcode.com/problems/regular-expression-matching/
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// recursive solution
var isMatch = function (s, p) {
  var _s0 = s.charAt(0),
      _p0 = p.charAt(0),
      _p1 = p.charAt(1);
  if (_s0 === '' && _p0 === '') {
    return true;
  }
  if (_p1 === '*') {
    while (!isMatch(s, p.substr(2))) {
      if (s.charAt(0) !== p.charAt(0) && p.charAt(0) != '.') {
        return false;
      }
      if (p.charAt(0) === '.' && s.charAt(0) === '') {
        return false;
      }
      s = s.substr(1);
    }
    return true;
  } else if (_p0 === '.') {
    return _s0 !== '' && isMatch(s.substr(1), p.substr(1));
  } else if (_s0 !== _p0) {
    return false;
  }

  return isMatch(s.substr(1), p.substr(1));
};

// DP solution

var isMatchDP = function(s, p) {
  hash = {};
  function dp(i, j) {
    var key = i + ',' + j;
    // console.log(key)
    if (hash[key] !== undefined) {
      return hash[key];
    }
    if (p.charAt(j) === '') {
      return hash[key] = (s.charAt(i) === '');
    } else if (p.charAt(j+1) === '*') {
      var k = i;
      while(!dp(k, j+2)) {
        if (p.charAt(j) === '.' ? s.charAt(k) === '' : s.charAt(k) !== p.charAt(j)) {
          return hash[key] = false;
        }
        k += 1;
      }
      return hash[key] = true;
    } else if (p.charAt(j) === '.') {
      return hash[key] = s.charAt(i) !== '' && dp(i + 1, j + 1);
    } else {
      return hash[key] = s.charAt(i) === p.charAt(j) && dp(i + 1, j + 1);
    }
  }
  // console.log(hash);
  return dp(0, 0);
}

console.log(isMatchDP('aa', 'ab*a.'));
