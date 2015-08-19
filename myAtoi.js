/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var
    i = 0,
    sign = 1,
    num = 0,
    next = 0;
  while (i < str.length && str[i] === ' ') {
    i++;
  }
  if (str[i] === '-') {
    sign = -1;
    i++;
  } else if (str[i] === '+') {
    i++;
  }
  // console.log(i, str[i]);
  while (!isNaN(str[i]) && str[i] !== ' ') {
    // console.log(i, str[i])
    next = parseInt(str[i]);
    if (num > 214748364 || num == 214748364 && next >= 8) {
      return sign < 0 ? -2147483648 : 2147483647;
    }
    num = num * 10 + next;
    i++;
  }
  // console.log(num);
  return sign * num;
};

console.assert(myAtoi('  ') === 0);
console.assert(myAtoi(' -1') === -1);
console.assert(myAtoi(' 12k23 ') === 12);
