/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i, j = nums.length-1, results = [];
    nums.sort(function (a, b) {return a-b;});
    for(i = 0; i < j; i++) {
        for(; j > i; j--) {
//	    console.log(i, j);
            if(target == nums[i] + nums[j]) {
                results.push(i+1, j+1);
                return results;
            } else if (target > nums[i] + nums[j]) {
                break;
            }
        }
    }
    return results;
};

console.log(twoSum([3,2,4], 6));

