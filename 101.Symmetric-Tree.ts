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

interface node {
  val: number;
  isLeft: boolean;
}

let map: Map<number, node> = new Map();
let index = 0;

function dfs(n: TreeNode | null, isLeft: boolean): void {
  if (!n) return;
  ++index;
  map.set(index, { val: n.val, isLeft });

  dfs(n.left, true);
  dfs(n.right, false);
}

function dfs_1(n: TreeNode | null, isLeft: boolean): boolean {
  if (!n) return true;

  ++index;
  let s = map.get(index)!;

  return (s.val === n.val && (index === 1 || s.isLeft != isLeft)) && dfs_1(n.right, false) && dfs_1(n.left, true);
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  map = new Map();
  index = 0;
  dfs(root, false);

  index = 0;
  return dfs_1(root, false);
};