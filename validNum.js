/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  var
    i = 0,
    isNumeric = false;
  while (i < s.length && s[i] == ' ') i++;
  if (i < s.length && (s[i] == '-' || s[i] == '+')) i++;
  while (i < s.length && !isNaN(s[i]) && s[i] != ' ') {
    i++;
    isNumeric = true;
  }
  if (s[i] == '.') i++;
  while (i < s.length && !isNaN(s[i]) && s[i] != ' ') {
    i++;
    isNumeric = true;
  }
  if (isNumeric && s[i] == 'e') {
    i++;
    isNumeric = false;
    if (i < s.length && (s[i] == '-' || s[i] == '+')) i++;
    while (i < s.length && !isNaN(s[i]) && s[i] != ' ') {
      i++;
      isNumeric = true;
    }
  }
  while (i < s.length && s[i] == ' ') i++;
  return isNumeric && i == s.length;
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
console.assert(!isNumber('1+6'));
