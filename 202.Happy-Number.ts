function isHappy(n: number): boolean {
  let num = n;
  let res = false;
  let rec: Set<number> = new Set();

  while (true) {
    if (num === 1) {
      res = true;
      break;
    }
    if (rec.has(num)) break;
    rec.add(num);
    let str = num.toString();
    num = 0;
    for (let c of str) num += Math.pow(+c, 2);
  }

  return res;
};