/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i,j,h = {}, results=[];
    for(i=0; i<nums.length; i++) {
        j = target - nums[i];
        if(h[''+j] !== undefined) {
            results.push(h[''+j], i+1);
            break;
        } else {
            h[''+nums[i]] = i+1;
        }
    }
    return results;
};

console.log(twoSum([3,2,4], 6));
