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

let vals: number[] = [];

function dfs(node: TreeNode | null): void {
  if (node === null) return;
  vals.push(node.val);
  dfs(node.left);
  dfs(node.right);
}

function getMinimumDifference(root: TreeNode | null): number {
  vals = [];
  dfs(root);
  vals.sort((a, b) => a - b);

  let len = vals.length;
  let res = Infinity;
  for (let i = 1; i < len; ++i) {
    let d = vals[i] - vals[i - 1];
    if (d < res) res = d;
  }
  return res;
};
