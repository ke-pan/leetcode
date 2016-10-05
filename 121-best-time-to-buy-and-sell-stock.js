/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) {
    return 0;
  }

  var profit = 0,
      buy = prices[0];

  for (var i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else if (prices[i] - buy > profit) {
      profit = prices[i] - buy;
    }
  }
  return profit;
};

console.log(maxProfit([5, 6, 2, 4, 8, 9, 5, 1, 5]));
