/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    let i = 0;
    while (i < obj.length) {
      if (Array.isArray(obj[i]) || obj[i] instanceof Object) {
        obj[i] = compactObject(obj[i]);
      }
      if (Boolean(obj[i]) === false) obj.splice(i, 1);
      else ++i;
    }
    return obj;
  } else {
    let keys = Object.keys(obj);
    for (let key of keys) {
      let value = obj[key];
      if (Array.isArray(value) || value instanceof Object) {
        value = compactObject(value);
      }
      if (Boolean(value) === false) delete obj[key];
    }
    return obj;
  }
};