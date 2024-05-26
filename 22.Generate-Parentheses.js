/**
 * @param {number} n
 * @return {string[]}
 */


var generateParenthesis = function (n) {
  let res = [];

  function dfs(sum, l, p, str) {
    if (sum === n) {
      res.push(str.join(''));
      return;
    }

    if (l < n) {
      l += 1;
      p += 1;
      str.push('(')
      dfs(sum, l, p, str);
      l -= 1;
      p -= 1;
      str.pop();
    }

    if (p > 0) {
      p -= 1;
      str.push(')');
      sum += 1;
      dfs(sum, l, p, str);
      p += 1;
      str.pop();
      sum -= 1;
    }
  }

  dfs(0, 0, 0, []);

  return res;
};