function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false;
  let res = true;
  let map: Map<string, number> = new Map();
  for (let char of s) {
    let cnt = map.get(char);
    if (!cnt) map.set(char, 1);
    else map.set(char, cnt + 1);
  }
  for (let char of t) {
    if (!map.has(char) || map.get(char) === 0) {
      res = false;
      break;
    } else map.set(char, map.get(char)! - 1);
  }

  return res;
};