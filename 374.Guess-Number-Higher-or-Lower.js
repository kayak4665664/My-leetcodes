/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {

  let left = 1, right = n;
  while (true) {
    let p = Math.trunc((left + right) / 2);

    let res = guess(p);

    if (!res) {
      return p;
    }
    else if (res === -1) {
      right = p - 1;
    } else {
      left = p + 1;
    }

  }
};