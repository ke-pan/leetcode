/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    
    return isEqual(getMap(s), getMap(t));
    
    function getMap(s) {
      var map = {}
      for (var c of s) {
        if (map[c]) {
          map[c] = map[c] + 1;
        } else {
          map[c] = 1;
        }
      }
      return map;
    }
    
    function isEqual (map1, map2) {
      if (map1.length !== map2.length) {
        return false;
      }
      for (var key in map1) {
        if (map1[key] !== map2[key]) {
          return false;
        }
      }
      
      return true;
    }
};


console.assert(isAnagram('abca', 'cbaa'))
console.log(isAnagram('abcd', 'baca'))