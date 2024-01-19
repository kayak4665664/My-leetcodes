function wordPattern(pattern: string, s: string): boolean {
  let a = new Map(), b = new Map();
  let str = s.split(' ');
  if (pattern.length !== str.length) return false;
  let res = true;
  for (let i = 0; i < pattern.length; ++i) {
    if (a.has(pattern[i])) {
      if (a.get(pattern[i]) !== str[i]) {
        res = false;
        break;
      }
    } else a.set(pattern[i], str[i]);
    if (b.has(str[i])) {
      if (b.get(str[i]) !== pattern[i]) {
        res = false;
        break;
      }
    } else b.set(str[i], pattern[i]);
  }
  return res;
};