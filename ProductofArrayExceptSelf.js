/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  /**
   * [1, a1, a1*a2, a1*a2*a3] x [a4*a3*a2, a3*a2, a2, 1]
   */
  
  var arr = new Array(nums.length)
  var p = 1
  for(var i in nums) {
    arr[i] = p;
    p *= nums[i];
  }
  
  p = 1
  for (;i >= 0; i--) {
    arr[i] *= p;
    p *= nums[i]
  }
  return arr
};

console.log(productExceptSelf([1,2,3,4]))