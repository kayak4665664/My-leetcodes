/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var addStrings = function (num1, num2) {
//   return (BigInt(num1) + BigInt(num2)).toString();
// };


var addStrings = function (num1, num2) {
  let a = [], b = [];

  if (num1.length < num2.length) {
    let num3 = num1;
    num1 = num2;
    num2 = num3;
  }

  for (let i = 0; i < num1.length; ++i) a.push(+num1[i]);
  for (let i = 0; i < num2.length; ++i) b.push(+num2[i]);

  let x = num1.length - 1, y = num2.length - 1;
  while (y >= 0) {
    a[x] += b[y];
    --x;
    --y;
  }

  x = num1.length - 1;
  while (x > 0) {
    if (a[x] >= 10) {
      a[x - 1] += 1;
      a[x] -= 10;
    }
    --x;
  }
  let first = a[0];

  if (first >= 10) a[0] -= 10;

  if (first >= 10) return 1 + a.join('');
  else return a.join('');

};