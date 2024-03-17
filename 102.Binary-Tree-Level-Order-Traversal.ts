function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = [];
  if (!root) return res;

  let q: TreeNode[] = [];
  q.push(root);

  while (q.length) {
    let list: number[] = [];
    let len = q.length;
    while (len) {
      let node = q.shift()!;
      list.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
      --len;
    }
    res.push(list);
  }

  return res;
};