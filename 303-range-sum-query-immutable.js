/**
 * https://leetcode.com/problems/range-sum-query-immutable/
 *
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this._sums = [nums[0]];
  var i, j;
  for (i = 1; i < nums.length; i++) {
    this._sums[i] = this._sums[i - 1] + nums[i];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i == 0) return this._sums[j];
  return this._sums[j] - this._sums[i - 1];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2));
console.log(numArray.sumRange(2, 5));
console.log(numArray.sumRange(0, 5));
