/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var j = nums.length;
  var i = 0;
  while (i < j) {
    if (nums[i] === val) {
      nums[i] = nums[--j];
    } else {
      i++;
    }
  }
  return j;
};

nums = [4, 5, 4]
console.log(removeElement(nums, 4))
console.log(nums)