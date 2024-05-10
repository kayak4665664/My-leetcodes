/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  if (n < 1000) return n.toString();
  let res = "";
  let s = n.toString();
  let cnt = 0;

  for (let i = s.length - 1; i >= 0; --i) {
    ++cnt;
    res = s[i] + res;
    if (cnt % 3 === 0 && i !== 0) res = '.' + res;
  }

  return res;
};