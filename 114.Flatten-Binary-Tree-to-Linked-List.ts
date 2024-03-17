let list: TreeNode[] = [];

function dfs(root: TreeNode): void {
  list.push(root);
  if (root.left) dfs(root.left);
  if (root.right) dfs(root.right);
}

function flatten(root: TreeNode | null): void {
  if (!root) return;

  list = [];
  dfs(root);

  let len = list.length - 1;
  for (let i = 0; i < len; ++i) {
    list[i].right = list[i + 1];
    list[i].left = null;
  }
  list[len].right = null;
  list[len].left = null;
};