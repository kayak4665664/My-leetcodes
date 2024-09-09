/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

  const memory = new Map();

  return function (...args) {
    let key = fn.name;
    for (let arg of args) key += '.' + arg;

    if (memory.has(key)) return memory.get(key);
    else {
      const value = fn(...args);
      memory.set(key, value);
      return value;
    }
  }
}


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/