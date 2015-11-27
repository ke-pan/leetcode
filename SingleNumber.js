/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var map = new Map();
  
  for (var i in nums) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  
  for (var key of map.keys()) {
    // console.log(key)
    if (map.get(key) == 1) {
      return key
    }
  }
};

console.log(singleNumber([1]))