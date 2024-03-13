// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
//   }
// }

function dfs(node: TreeNode | null): void {
  if (!node) return;
  dfs(node.left);
  dfs(node.right);
  let tmp = node.left;
  node.left = node.right;
  node.right = tmp;
}

function invertTree(root: TreeNode | null): TreeNode | null {
  dfs(root);
  return root;
};