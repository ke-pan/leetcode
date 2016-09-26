/**
 * https://leetcode.com/problems/container-with-most-water/
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var low = 0, high = height.length - 1;
  var area = 0
  while(low < high) {
    area = Math.max(area, Math.min(height[low], height[high]) * (high - low));
    if (height[low] < height[high]) {
      low++;
    } else {
      high--;
    }
  }
  return area;
};

console.log(maxArea([1,2,3,4,5,6]));
