/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let res = true;

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') stack.push('(');
    else if (s[i] === '{') stack.push('{');
    else if (s[i] === '[') stack.push('[');
    else {
      let top = stack.pop();
      if (!(top === '(' && s[i] === ')' || top === '{' && s[i] === '}' || top === '[' && s[i] === ']')) {
        res = false;
        break;
      }
    }
  }

  if (stack.length) res = false;

  return res;
};