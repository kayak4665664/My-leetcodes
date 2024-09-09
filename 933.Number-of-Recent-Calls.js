
var RecentCounter = function () {
  this.list = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.list.push(t);
  let res = 0;
  let index = this.list.length - 1;
  while (index >= 0) {
    if (this.list[index] <= t && this.list[index] >= t - 3000) {
      ++res;
      --index;
    }
    else break;
  }
  return res;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */