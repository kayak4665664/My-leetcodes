function isPalindrome(x: number): boolean {
  let str = x.toString();
  let len = str.length;
  for (let i = 0; i < len / 2; ++i) {
    if (str[i] !== str[len - i - 1]) return false;
  }
  return true;
};