/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
// var flat = function (arr, n) {

//   if (n === 0) return arr;

//   return arr.reduce((res, item) => {
//     if (Array.isArray(item)) return res.concat(flat(item, n - 1));
//     else return res.concat(item);
//   }, []);
// };

var flat = function (arr, n) {
  if (n === 0) return arr;

  const res = [];
  const stack = arr.map(a => [a, n]);

  while (stack.length) {
    const [cur, depth] = stack.pop();

    if (Array.isArray(cur) && depth > 0) {
      stack.push(...cur.map(c => [c, depth - 1]));
    } else {
      res.push(cur);
    }
  }

  return res.reverse();
};
