/**
 * https://leetcode.com/problems/integer-to-roman/
 *
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var result = ''
  while (num >= 1) {
    if (num - 1000 >= 0) {
      num = num - 1000;
      result += 'M';
    } else if (num - 900 >= 0) {
      num -= 900
      result += 'CM';
    } else if (num - 500 >= 0) {
      num -= 500
      result += 'D';
    } else if (num - 400 >= 0) {
      num -= 400
      result += 'CD';
    } else if (num - 100 >= 0) {
      num -= 100
      result += 'C';
    } else if (num - 90 >= 0) {
      num -= 90
      result += 'XC';
    } else if (num - 50 >= 0) {
      num -= 50
      result += 'L';
    } else if (num - 40 >= 0) {
      num -= 40
      result += 'XL';
    } else if (num - 10 >= 0) {
      num -= 10
      result += 'X';
    } else if (num - 9 >= 0) {
      num -= 9
      result += 'IX';
    } else if (num - 5 >= 0) {
      num -= 5
      result += 'V';
    } else if (num - 4 >= 0) {
      num -= 4
      result += 'IV';
    } else if (num - 1 >= 0) {
      num -= 1
      result += 'I';
    }
  }
  return result;
};

console.log(intToRoman(41));
