/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {

  const res = [];
  const map = new Map();

  for (let obj of arr1) map.set(obj.id, { ...obj });

  for (let obj of arr2) {
    const id = obj.id;

    if (map.has(id)) {
      const o = map.get(id);
      for (let key in obj) o[key] = obj[key];
    } else map.set(id, { ...obj });
  }

  for (let value of map.values()) res.push(value);

  res.sort((a, b) => a.id - b.id);

  return res;
};