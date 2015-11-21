/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  
  if (nums.length < 2) { return nums.length }
  
  var tmp = nums[0];
  
  for (var i = 1, j = 1; j < nums.length; j++) {
    if (nums[j] !== tmp) {
      nums[i] = tmp = nums[j];
      i++;
    } 
  }
  
  return i;
};

var nums = [1,2,2,3,3]

console.log(removeDuplicates(nums))
console.log(nums)