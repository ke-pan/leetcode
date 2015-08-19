/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var
    i,
    find = false,
    neg = false,
    num = 0;
  for (i = 0; i < str.length; i++) {
    // console.log(str[i], num);
    if (!find && str[i] !== ' ') {
      find = true
      if (str[i] === '-') {
        neg = true;
        continue;
      } else if (str[i] === '+') {
        neg = false;
        continue;
      }
    }
    if (find) {
      if (isNaN(str[i]) || str[i] === ' ') break;
      num = num * 10 + parseInt(str[i]);
    }
  }
  num = neg ? -num : num;
  if (num > 2147483647) return 2147483647;
  else if (num < -2147483648) return -2147483648
  else return num;
};

console.assert(myAtoi('  ') === 0);
console.assert(myAtoi(' -1 ') === -1);
console.assert(myAtoi(' 12k23 ') === 12);
