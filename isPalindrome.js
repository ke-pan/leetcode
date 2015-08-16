/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var i, j;
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    i = 0;
    j = s.length - 1;
    while(i < j) {
        if(s[i] != s[j]) return false;
        else {
            i++;
            j--;
        }
    }
    return true;
};


console.log(isPalindrome(''));
console.log(isPalindrome('a'));
console.log(isPalindrome('aa'));
console.log(isPalindrome('aBc ,b;a'));
console.log(isPalindrome('ab'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
