let res = 0;

function dfs(n: TreeNode | null): void {
  if (!n) return;
  ++res;
  dfs(n.left);
  dfs(n.right);
}

function countNodes(root: TreeNode | null): number {
  res = 0;
  dfs(root);
  return res;
};