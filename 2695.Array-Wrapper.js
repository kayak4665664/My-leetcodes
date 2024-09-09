/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.nums = [...nums]
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  if (this.nums.length === 0) return 0;

  return this.nums.reduce((sum, num) => {
    return sum + num
  }, 0);
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  let str = '[';

  for (const num of this.nums) {
    if (str !== '[') str += ',';
    str += num;
  }

  return str + ']';
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */