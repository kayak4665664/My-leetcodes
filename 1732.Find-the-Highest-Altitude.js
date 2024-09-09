/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0;
  let sum = 0;

  for (let g of gain) {
    sum += g;
    if (sum > max) max = sum;
  }

  return max;
};