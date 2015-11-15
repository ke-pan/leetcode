/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  
  var l = s.length;
  var result = 0;
  
  for (var i = 0; i < l; i++) {
    if (i + 1 < l && map[s[i]] < map[s[i+1]]) {
      result += map[s[i+1]] - map[s[i]];
      i++;
    } else {
      result += map[s[i]];
    } 
  }
  
  return result;
};

console.assert(romanToInt('I') === 1)
console.assert(romanToInt('II') === 2)
console.assert(romanToInt('IV') === 4)
console.assert(romanToInt('IX') === 9)
console.assert(romanToInt('XXIV') === 24)
console.assert(romanToInt('DIV') === 504)
console.assert(romanToInt('MMCDXX') === 2420)
console.assert(romanToInt('MCMXCIX') === 1999)