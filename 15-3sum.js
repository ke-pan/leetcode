/**
 * https://leetcode.com/problems/3sum/
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var result = [];
  if (nums.length < 3) return result;
  nums = nums.sort(function (i, j) {
    return i - j;
  });
  for (var i = 0; i < nums.length - 2; i++) {
    if (i == 0 || (i > 0 && nums[i] != nums[i-1])) {
      var lo = i+1, hi = nums.length-1, sum = 0 - nums[i];
        while (lo < hi) {
          if (nums[lo] + nums[hi] == sum) {
            result.push([nums[i], nums[lo], nums[hi]]);
            while (lo < hi && nums[lo] == nums[lo+1]) lo++;
            while (lo < hi && nums[hi] == nums[hi-1]) hi--;
            lo++; hi--;
          } else if (nums[lo] + nums[hi] < sum) lo++;
          else hi--;
        }
      }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
