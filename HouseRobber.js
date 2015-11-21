/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  
  mem = [];
  
  function helper(nums, i) {
    // console.log(i)
    if (mem[i] === undefined) {    
      var tmp = [0];
      for (var j = i + 2; j < nums.length; j++) {
        tmp.push(helper(nums, j));
      }
      mem[i] = nums[i] + Math.max.apply(null, tmp);
    }
    return mem[i];
  }
  
  return Math.max(helper(nums, 0), helper(nums, 1));
  // console.log(mem)
};

console.log(rob([2,1,3,8,102,104]))