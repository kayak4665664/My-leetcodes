function lengthOfLongestSubstring(s: string): number {
  let set = new Set();
  let res = 0, len = s.length, sum = 0;
  let t = "";
  for (let i = 0; i < len; ++i) {
    if (set.has(s[i])) {
      set.clear();
      let index = t.indexOf(s[i]);
      t = t.substring(index + 1);
      for (let c of t) set.add(c);
      sum = t.length;
    }
    ++sum;
    t += s[i];
    set.add(s[i]);
    if (sum > res) res = sum;
  }
  return res;
};