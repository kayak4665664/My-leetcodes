function lengthOfLastWord(s: string): number {
  let str = '';
  let flag = false;
  for (let i = 0; i < s.length; ++i) {
    if (!flag) {
      if (s[i] !== ' ') {
        str = s[i];
        flag = true;
      }
    } else {
      if (s[i] === ' ') flag = false;
      else str += s[i];
    }
  }
  return str.length;
};