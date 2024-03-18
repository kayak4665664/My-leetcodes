function wordBreak(s: string, wordDict: string[]): boolean {
  let set: Set<string> = new Set(wordDict);
  let len = s.length;
  let dp: boolean[] = new Array(len + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= len; ++i) {
    for (let j = 0; j < i; ++j) {
      if (dp[j]) {
        let word = s.substring(j, i);
        if (set.has(word)) dp[i] = true;
      }
    }
  }
  return dp[len];
};