function validMountainArray(arr: number[]): boolean {
  let res = true, inc = true, len = arr.length;
  if (len < 3 || arr[0] >= arr[1] ) return false;
  for (let i = 0; i < len; ++i) {
    if (inc && (arr[i] < arr[i - 1])) inc = false;
    if (arr[i] == arr[i - 1] || (!inc && (arr[i] >= arr[i - 1]))) {
      res = false;
      break;
    }
  }
  if (inc) res = false;
  return res;
};