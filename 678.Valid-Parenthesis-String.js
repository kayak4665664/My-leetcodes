/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let left = [];
  let asterisk = [];
  let res = true;

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') left.push(i);
    else if (s[i] === '*') asterisk.push(i);
    else {
      if (left.length > 0) left.pop();
      else if (asterisk.length > 0) asterisk.pop();
      else {
        res = false;
        break;
      }
    }
  }

  if (res === true && left.length > 0) {
    if (asterisk.length >= left.length) {
      while (left.length) {
        let l = left.pop();
        let a = asterisk.pop();
        if (a <= l) {
          res = false;
          break;
        }
      }
    } else res = false;
  }

  return res;
};