let res: number = 0;

function dfs(root: TreeNode, num: string): void {
  num += root.val.toString();

  if (!root.left && !root.right) {
    res += +num;
    return;
  }

  if (root.left) dfs(root.left, num);
  if (root.right) dfs(root.right, num);
}

function sumNumbers(root: TreeNode | null): number {
  if (!root) return 0;

  res = 0;
  dfs(root, '');

  return res;
};