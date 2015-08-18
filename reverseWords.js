/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  var i, s, words='';
  for(i=str.length-1;i>=0;i--) {
    if(str[i] === ' ') s = i;
    else if(str[i-1] ===' ' || i === 0) {
      if(words.length !== 0) words += ' ';
      words += str.slice(i, s);
    }
  }
  return words;
};

console.log(reverseWords('  hello you   my friend '));
