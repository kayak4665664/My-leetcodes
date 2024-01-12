function isIsomorphic(s: string, t: string): boolean {
  let ms = new Map(), mt = new Map();
  for (let i = 0; i < s.length; ++i) {
    if (ms.has(s[i])) {
      if (ms.get(s[i]) !== t[i]) return false;
    } else ms.set(s[i], t[i]);

    if (mt.has(t[i])) {
      if (mt.get(t[i]) !== s[i]) return false;
    } else mt.set(t[i], s[i]);
  }
  return true;
};