/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    map = new Map()
    for (var i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        return true
      }
      map.set(nums[i], 1)
    }
    return false
};