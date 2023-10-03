const findNumbers = (nums: number[]): number => {
  let res  = 0;
  for (let num of nums) {
    let str = num.toString();
    if (str.length % 2 == 0) ++ res;
  }
  return res;
};