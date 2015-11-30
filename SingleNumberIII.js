/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var result = []
  var set = new Set();
  for(var num of nums) {
    if (set.has(num)) {
      set.delete(num)
    } else {
      set.add(num)
    }
  }
  for(var val of set) {
    result.push(val)
  }
  return result
};