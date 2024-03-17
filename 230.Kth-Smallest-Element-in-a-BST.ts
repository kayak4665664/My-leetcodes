let res: number = 0, target: number = 0, index: number = 0;

function dfs(root: TreeNode): void {
  if (root.left) dfs(root.left);

  ++index;
  if (index === target) {
    res = root.val;
    return;
  }

  if (root.right) dfs(root.right);
}

function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return 0;

  res = 0;
  target = k;
  index = 0;

  dfs(root);

  return res;
};