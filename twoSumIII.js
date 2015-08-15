/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function TwoSumIII() {
    var _nums = {};
    this.add = function(num) {
        if(_nums[''+num]) _nums[''+num] = _nums[''+num] + 1;
        else _nums[''+num] = 1;
    };
    this.find = function(target) {
        var i, j;
        for(i in _nums) {
            j = target - i;
            if(j == i && _nums[i] > 1 || _nums[''+j]) {
                return true;
            }
        }
        return false;
    }
};

var twoSumIII = new TwoSumIII();
twoSumIII.add(1);
twoSumIII.add(3);
twoSumIII.add(5);
console.log(twoSumIII.find(4));
console.log(twoSumIII.find(7));
console.log(twoSumIII.find(8));
