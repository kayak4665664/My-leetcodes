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

function averageOfLevels(root: TreeNode | null): number[] {
  let queue = [];
  let res = [], sum = 0, cnt = 0;

  queue.push(root);

  while (queue.length > 0) {
    sum = 0;
    cnt = 0;
    let tmp = [];
    for (let node of queue) {
      sum += node!.val;
      ++cnt;

      if (node!.left !== null) tmp.push(node!.left);
      if (node!.right !== null) tmp.push(node!.right);
    }
    res.push(sum / cnt);
    queue = tmp;
  }
  return res;
};