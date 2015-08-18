/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  //  return haystack.indexOf(needle);
  var i, j;
  for(i=0;;i++) {
    for(j=0;;j++) {
      if(j==needle.length) return i;
      if(i+j==haystack.length) return -1;
      if(haystack[i+j]!=needle[j]) break;
    }
  }
};
