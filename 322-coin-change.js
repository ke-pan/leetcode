/**
 * https://leetcode.com/problems/coin-change/
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  var dp = new Array(amount + 1);
  dp.fill(amount + 1);
  dp[0] = 0;

  for (var i = 1; i < amount + 1; i++) {
    for (var j = 0; j < coins.length; j++) {
      if (coins[j] <= i) dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};

console.log(coinChange([1], 1));
