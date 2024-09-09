var TimeLimitedCache = function () {
  this.cache = new Map();
  this.timer = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const keyExists = this.cache.has(key);

  if (keyExists) {
    clearTimeout(this.timer.get(key));
  }

  this.cache.set(key, value);

  const timer = setTimeout(() => {
    this.cache.delete(key);
    this.timer.delete(key);
  }, duration);

  this.timer.set(key, timer);

  return keyExists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    return this.cache.get(key);
  } else {
    return -1;
  }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
