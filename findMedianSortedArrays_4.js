/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var median,
      i = 0,
      j = 0;
  while ((i + j) * 2 < nums1.length + nums2.length) {
    if (nums1[i] !== undefined && nums1[i] <= nums2[j] || nums2[j] === undefined) {
      median = nums1[i];
      i += 1;
    } else {
      median = nums2[j];
      j += 1;
    }
    console.log(i, j, median);
  }
  if ((nums1.length + nums2.length) % 2 === 0) {
    if (i >= nums1.length) {
      median = (median + nums2[j]) / 2;
    } else if (j >= nums2.length) {
      median = (median + nums1[i]) / 2;
    } else {
      median = (median + Math.min(nums1[i], nums2[j])) / 2;
    }
  }
  return median;
};

var nums1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
    nums2 = [0,6],
    result;



result = findMedianSortedArrays(nums1, nums2);
console.log(result);
