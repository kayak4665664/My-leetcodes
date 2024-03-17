let res: number[][] = [];
let numbers: number[] = [];

function dfs(list: number[]): void {
  if (list.length === numbers.length) {
    res.push([...list]);
    return;
  }

  for (let i = 0; i < numbers.length; ++i) {
    if (list.includes(numbers[i]) === false) {
      list.push(numbers[i]);
      dfs(list);
      list.pop();
    }
  }
}

function permute(nums: number[]): number[][] {
  res = [];
  numbers = nums;
  dfs([]);
  return res;
};