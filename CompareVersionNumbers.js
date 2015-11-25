/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    
    var v1 = version1.split('.')
    var v2 = version2.split('.')
    for (var i = 0; i < Math.max(v1.length, v2.length); i++) {
      var i1 = v1[i] ? parseInt(v1[i]) : 0;
      var i2 = v2[i] ? parseInt(v2[i]) : 0;
      if (i1 > i2) return 1;
      if (i1 < i2) return -1;
    }
    return 0;
};

console.assert(compareVersion('1', '0') == 1)
console.assert(compareVersion('1.1', '1.10') == -1)
console.assert(compareVersion('1.10.1', '1.10') == 1)
console.assert(compareVersion('1.2', '1.10') == -1)
console.assert(compareVersion('1.0', '1') == 0)
console.assert(compareVersion('1.0.1', '1') == 1)