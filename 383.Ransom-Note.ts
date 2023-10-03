const canConstruct = (ransomNote: string, magazine: string): boolean => {
  let res = true;
  let a = new Array(26).fill(0);
  let b = new Array(26).fill(0);
  let charCode = 'a'.charCodeAt(0);
  for (let letter of magazine) ++a[letter.charCodeAt(0) - charCode];
  for (let letter of ransomNote) ++b[letter.charCodeAt(0) - charCode];
  for (let i = 0; i < 26; ++i) {
    if (a[i] < b[i]) {
      res = false;
      break;
    }
  }
  return res;
};