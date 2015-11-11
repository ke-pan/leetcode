/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length === 0) {
      return
    }
    
    var i = 0, j = nums.length - 1;
    
    while ( i < j ) {
      if (nums[i] === 0) {
        moveTo(i, j, nums);
        j--;
      } else {
        i++;
      }
    }
    
    function moveTo(i, j, nums) {
      for (var k = i; k < j; k++) {
        swapUp(k, nums)
      }
    }
    
    function swapUp(i, nums) {
      var k = nums[i];
      nums[i] = nums[i+1];
      nums[i+1] = k;
    }
};

var a = [0, 0, 1];
moveZeroes(a)
console.log(a)