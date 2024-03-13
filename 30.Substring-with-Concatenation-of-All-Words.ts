function findSubstring(s: string, words: string[]): number[] {
  let res: number[] = [];
  let wordLen = words[0].length;
  let len = wordLen * words.length;
  let left = 0;
  let end = s.length;
  let map: Map<string, number> = new Map();

  for (let word of words) {
    let cnt = map.get(word);
    if (!cnt) map.set(word, 1);
    else map.set(word, cnt + 1);
  }

  while (left < end) {
    if (left + len > end) break;
    let str = s.substring(left, left + wordLen);
    if (map.has(str)) {

      let index = left + wordLen;
      let m: Map<string, number> = new Map();
      m.set(str, 1);

      while (str.length < len) {
        let newStr = s.substring(index, index + wordLen);

        if (map.has(newStr) && (!m.has(newStr) || m.get(newStr)! < map.get(newStr)!)) {
          str += newStr;
          let cnt = m.get(newStr);
          if (!cnt) m.set(newStr, 1);
          else m.set(newStr, cnt + 1);
          index += wordLen;
        }
        else break;
      }
      if (str.length === len) res.push(left);
    }
    ++left;
  }
  return res;
};