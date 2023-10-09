function sortArrayByParity(nums: number[]): number[] {
  let res: number[] = [];
  res = nums.sort((a, b) => {
    if (a % 2 == 0 && b % 2 != 0) return -1;
    else if (a % 2 != 0 && b % 2 == 0) return 1;
    else return 0;
  });
  return res;
};
