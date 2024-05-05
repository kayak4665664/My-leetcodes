function convertToTitle(columnNumber: number): string {
  let num = columnNumber.toString(26);
  let res = '';

  let A = 'A'.charCodeAt(0);
  let carry = 0;

  for (let i = num.length - 1; i >= 0; --i) {
    let n = 0;
    if (num[i].charCodeAt(0) >= A) n = 10 + (num[i].toUpperCase()).charCodeAt(0) - A;
    else n = +num[i];

    if (n === 0) {
      n = 26;
      if (carry) {
        n -= carry;
        carry = 0;
      }

      carry += 1;
      res = String.fromCharCode(A + n - 1) + res;
      continue;
    }

    if (carry) {
      if (n >= carry) {
        n -= carry;
        carry = 0;
      } else {
        carry -= n;
        n = 0;
      }
    }
    if (n === 0) {
      if (i === 0) break;
      else {
        n = 26;
        carry += 1;
      }
    }
    res = String.fromCharCode(A + n - 1) + res;
  }

  return res;
};