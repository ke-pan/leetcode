/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var map = new Map();
  for (var num of nums) {
    if(map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }
  var l = nums.length / 2;
  for (var key of map.keys()) {
    if (map.get(key) >= l) {
      return key
    }
  }
  return 0;
};

console.assert(majorityElement([1,1,1,2]) == 1)