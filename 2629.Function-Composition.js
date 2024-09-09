/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

  return function (x) {
    if (functions.length === 0) return x;
    else {
      let res = functions[functions.length - 1](x);
      for (let i = functions.length - 2; i >= 0; --i) res = functions[i](res);
      return res;
    }
  }
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/