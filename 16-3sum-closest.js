/**
 * https://leetcode.com/problems/3sum-closest/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) return undefined;
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  var closest = 10000;
  for (var i = 0; i < nums.length - 2; i++) {
    var j = i + 1;
        k = nums.length - 1;
    while (j < k) {
      var sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;
      if (sum > target) k--;
      else if (sum < target) j++;
      else return sum;
    }
  }
  return closest;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
