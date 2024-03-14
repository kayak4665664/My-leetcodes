function longestCommonPrefix(strs: string[]): string {
  let str = strs[0];
  let len = str.length;
  let res = '';

  for (let i = 0; i <= len; ++i) {
    let sub = str.substring(0, i);

    let flag = true;
    for (let j = 0; j < strs.length; ++j) {
      if (!strs[j].startsWith(sub)) {
        flag = false;
        break;
      }
    }
    if (flag) res = sub;
    else break;
  }
  return res;
};