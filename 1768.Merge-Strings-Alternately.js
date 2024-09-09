/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = "";
  let a = 0, b = 0;
  while (a < word1.length || b < word2.length) {
    if (a < word1.length) {
      res += word1[a];
      ++a;
    }
    if (b < word2.length) {
      res += word2[b];
      ++b;
    }
  }
  return res;
};