let n: number[] = [];

function dfs(left: number, right: number): TreeNode | null {

  if (left === right) return null;

  let mid = Math.floor((left + right) / 2);
  let e = new TreeNode(n[mid]);

  e.left = dfs(left, mid);
  e.right = dfs(mid + 1, right);

  return e;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  n = nums;
  return dfs(0, nums.length);
};