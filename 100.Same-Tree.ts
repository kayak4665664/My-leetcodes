// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = (val === undefined ? 0 : val);
//     this.left = (left === undefined ? null : left);
//     this.right = (right === undefined ? null : right);
//   }
// }

function dfs(i: TreeNode | null, j: TreeNode | null): boolean {
  if (!i && !j) return true;
  else {
    if (i && j && i.val === j.val && dfs(i.left, j.left) && dfs(i.right, j.right)) return true;
    else return false;
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let i = p, j = q;
  return dfs(i, j);
};