/**
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    c = [1, 1]
    for (var i = 2; i <= n; i++) {
        c[i] = c[i - 1] + c[i - 2];
    }
    return c[n];
};

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
