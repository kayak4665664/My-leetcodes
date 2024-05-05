/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.head = { url: homepage, next: null, prior: null };
  this.current = this.head;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  let next = { url: url, next: null, prior: this.current };
  this.current.next = next;
  this.current = this.current.next;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let num = 0;
  while (this.current !== this.head && num < steps) {
    this.current = this.current.prior;
    ++num;
  }
  return this.current.url;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let num = 0;
  while (this.current.next !== null && num < steps) {
    this.current = this.current.next;
    ++num;
  }
  return this.current.url;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */