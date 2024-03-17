function evalRPN(tokens: string[]): number {
  let s: number[] = [];
  for (let str of tokens) {
    let token = +str;
    if (str !== '+' && str !== '-' && str !== '*' && str !== '/') s.push(token);
    else {
      let b = s.pop()!;
      let a = s.pop()!;
      if (str === '+') s.push(a + b);
      else if (str === '-') s.push(a - b);
      else if (str === '*') s.push(a * b);
      else s.push(Math.trunc(a / b));
    }
  }
  return s[0];
};