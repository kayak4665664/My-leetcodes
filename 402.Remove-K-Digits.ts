function removeKdigits(num: string, k: number): string {
  if (k === num.length) return "0";
  let stack: string[] = [];
  let removed = 0;
  for (let i = 0; i < num.length; ++i) {
    while (stack.length && removed < k && num[i] < stack[stack.length - 1]) {
      ++removed;
      stack.pop();
    }
    stack.push(num[i]);
  }
  while (removed < k) {
    stack.pop();
    ++removed;
  }
  let flag = false;
  for (let i = 0; i < stack.length; ++i) {
    if (stack[i] !== '0') {
      flag = true;
      stack = stack.slice(i);
      break;
    }
  }
  if (!flag) return "0";
  else return stack.join('');
};