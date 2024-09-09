/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  let res = [];
  let set = new Set(wordDict);
  let len = s.length;

  function dfs(index, str) {
    if (index >= len) {
      res.push(str);
      return;
    }

    let w = '';
    for (let i = index; i < len; ++i) {
      w += s[i];

      if (set.has(w)) {
        let newStr = str;
        if (newStr !== '') newStr += ' ';
        newStr += w;
        dfs(i + 1, newStr);
      }
    }
  }

  dfs(0, '');
  return res;
};