let flag = false;
let target = NaN;

function dfs(n: TreeNode | null, sum: number): void {
  if (flag || !n) return;

  sum += n.val;
  if (sum === target && !n.left && !n.right) {
    flag = true;
    return;
  }

  dfs(n.left, sum);
  dfs(n.right, sum);
}


function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  flag = false;
  target = targetSum;
  dfs(root, 0);
  return flag;
};