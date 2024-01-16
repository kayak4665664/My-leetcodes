
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

let res = 0;


function dfs(node: TreeNode | null, depth: number): void {
  if (node === null) return;
  ++depth;
  if (depth > res) res = depth;
  dfs(node.left, depth);
  dfs(node.right, depth);
}

function maxDepth(root: TreeNode | null): number {
  res = 0;
  dfs(root, 0);
  return res;
};