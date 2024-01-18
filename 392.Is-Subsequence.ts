function isSubsequence(s: string, t: string): boolean {
  let i = 0, j = 0;
  let l1 = s.length, l2 = t.length;
  while (i < l1 && j < l2) {
    if (t[j] === s[i]) {
      ++i;
      ++j;
    } else ++j;
  }
  if (i >= l1) return true;
  else return false;
};