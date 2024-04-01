function maxProfit(prices: number[]): number {
  let result = 0;
  let sum = 0;
  for (let i = 1; i < prices.length; ++i) {
    let p = prices[i] - prices[i - 1];
    if (p > 0) sum += p;
    if (sum > result) result = sum;
  }
  return result;
};