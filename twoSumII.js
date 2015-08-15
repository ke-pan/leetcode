/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumII = function(nums, target) {
    var i=0, j=nums.length-1;
    while(i<j) {
        if(nums[i]+nums[j]<target) i++;
        else if(nums[i] + nums[j]>target) j--;
        else return [i+1, j+1];
    }
    return [];
};
