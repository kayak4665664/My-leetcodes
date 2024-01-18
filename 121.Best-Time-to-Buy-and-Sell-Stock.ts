function maxProfit(prices: number[]): number {
  let p = [0];
  let len = prices.length;
  let max = 0;
  let sum = 0;
  let flag = false;
  for (let i = 1; i < len; ++i) {
    p[i] = prices[i] - prices[i - 1];
    if (flag) {
      sum += p[i];
      if (sum > max) max = sum;
      if (sum <= 0) {
        sum = 0;
        flag = false;
      }
    } else {
      if (p[i] > 0) {
        sum += p[i];
        if (sum > max) max = sum;
        flag = true;
      }
    }
  }
  return max;
};