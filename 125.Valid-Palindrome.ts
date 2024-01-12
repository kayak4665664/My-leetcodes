function isPalindrome(s: string): boolean {
  let str = "";
  let a = "a".charCodeAt(0), z = "z".charCodeAt(0);
  let A = "A".charCodeAt(0), Z = "Z".charCodeAt(0);
  let _0 = "0".charCodeAt(0), _9 = "9".charCodeAt(0);
  for (let c of s) {
    let code = c.charCodeAt(0);
    if (code >= a && code <= z || code >= _0 && code <= _9) str += c;
    else if (code >= A && code <= Z) str += c.toLowerCase();
  }
  let left = 0, right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) return false;
    ++left;
    --right;
  }
  return true;
};