let res: number[][];

function dfs(n: number, k: number, nums: number[], left: number) {
  if (nums.length === k) {
    res.push(nums.slice());
    return;
  }

  for (let i = left; i <= n; ++i) {
    nums.push(i);
    dfs(n, k, nums, i + 1);
    nums.pop();
  }
}

function combine(n: number, k: number): number[][] {
  res = [];
  dfs(n, k, [], 1);
  return res;
};