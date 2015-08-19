/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  var i = 0;
  while (i < s.length && s[i] == ' ') i++;
  if (s[i] == '-' || s[i] == '+') i++;
  if (i == s.length) return false;
  if (s[i] == '.') {
    i++;
    if (isNaN(s[i]) || s[i] == ' ') return false;
    while (i < s.length && !isNaN(s[i]) && s[i] !== ' ') i++;
    if (i == s.length) return true;
    if (s[i] == ' ') {
      while (i < s.length && s[i] == ' ') i++;
      if (i < s.length) return false;
      else return true;
    }
    else if (s[i] == 'e') {
      i++;
      if (s[i] == '-' || s[i] == '+') i++;
      if (isNaN(s[i]) || s[i] == ' ') return false;
      while (i < s.length && !isNaN(s[i]) && s[i] !== ' ') i++;
      if (i == s.length) return true;
      if (s[i] == ' ') {
        while (i < s.length && s[i] == ' ') i++;
        if (i < s.length) return false;
        else return true;
      }
      else return false;
    }
    else return false;
  }
  else if (isNaN(s[i])) return false;
  while (i < s.length && !isNaN(s[i]) && s[i] !== ' ') i++;
  if (i == s.length) return true;
  if (s[i] == '.') {
    i++;
    while (i < s.length && !isNaN(s[i]) && s[i] !== ' ') i++;
    if (i == s.length) return true;
    if (s[i] == ' ') {
      while (i < s.length && s[i] == ' ') i++;
      if (i < s.length) return false;
      else return true;
    }
    else if (s[i] == 'e') {
      i++;
      if (s[i] == '-' || s[i] == '+') i++;
      if (isNaN(s[i]) || s[i] == ' ') return false;
      while (i < s.length && !isNaN(s[i]) && s[i] !== ' ') i++;
      if (i == s.length) return true;
      if (s[i] == ' ') {
        while (i < s.length && s[i] == ' ') i++;
        if (i < s.length) return false;
        else return true;
      }
      else return false;
    }
    else return false;
  }
  else if (s[i] == 'e') {
    i++;
    if (s[i] == '-' || s[i] == '+') i++;
    if (isNaN(s[i]) || s[i] == ' ') return false;
    while (i < s.length && !isNaN(s[i]) && s[i] !== ' ') i++;
    if (i == s.length) return true;
    if (s[i] == ' ') {
      while (i < s.length && s[i] == ' ') i++;
      if (i < s.length) return false;
      else return true;
    }
    else return false;
  }
  else if (s[i] == ' ') {
    while (i < s.length && s[i] == ' ') i++;
    if (i < s.length) return false;
    else return true;
  }
  else return false;
};


console.assert(isNumber('1'));
console.assert(!isNumber('1a'));
console.assert(isNumber('1234'));
console.assert(isNumber('1.234'));
console.assert(!isNumber(' '));
console.assert(isNumber('1e234'));
console.assert(isNumber('.1234'));
console.assert(!isNumber(''));
console.assert(!isNumber('.'));
console.assert(isNumber('-1'));
console.assert(isNumber('-1e+5'));
console.assert(!isNumber('0e'));
