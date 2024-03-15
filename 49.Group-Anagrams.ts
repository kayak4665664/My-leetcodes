function groupAnagrams(strs: string[]): string[][] {
  let res: string[][] = [];
  let map: Map<string, string[]> = new Map();

  for (let i = 0; i < strs.length; ++i) {
    let str = strs[i].split('');
    str.sort();
    let s = str.join('');
    if (map.has(s)) {
      let ss = map.get(s)!;
      ss.push(strs[i]);
      map.set(s, ss);
    } else map.set(s, [strs[i]]);
  }

  for (let p of map) res.push(p[1]);

  return res;
};