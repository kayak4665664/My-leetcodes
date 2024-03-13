function romanToInt(s: string): number {
  let m: Map<string, number> = new Map();

  m.set('I', 1);
  m.set('V', 5);
  m.set('X', 10);
  m.set('L', 50);
  m.set('C', 100);
  m.set('D', 500);
  m.set('M', 1000);

  let res = 0;
  let ptr = 0;
  while (ptr < s.length) {
    if (ptr === s.length - 1) {
      res += m.get(s[ptr])!;
      ptr += 1;
    } else {
      if (s[ptr] === 'I') {
        if (s[ptr + 1] === 'V') {
          res += 4;
          ptr += 2;
        } else if (s[ptr + 1] === 'X') {
          res += 9;
          ptr += 2;
        } else {
          res += 1;
          ptr += 1;
        }
      } else if (s[ptr] === 'X') {
        if (s[ptr + 1] === 'L') {
          res += 40;
          ptr += 2;
        } else if (s[ptr + 1] === 'C') {
          res += 90;
          ptr += 2;
        } else {
          res += 10;
          ptr += 1;
        }
      } else if (s[ptr] === 'C') {
        if (s[ptr + 1] === 'D') {
          res += 400;
          ptr += 2;
        } else if (s[ptr + 1] === 'M') {
          res += 900;
          ptr += 2;
        } else {
          res += 100;
          ptr += 1;
        }
      } else {
        res += m.get(s[ptr])!;
        ptr += 1;
      }
    }
  }
  return res;
};
