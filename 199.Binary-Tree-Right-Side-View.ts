function rightSideView(root: TreeNode | null): number[] {
  let res = [];
  let q = [];

  if (root) {
    q.push(root);
    while (q.length > 0) {
      res.push(q[q.length - 1].val);
      let len = q.length;
      while (len) {
        let n = q.shift();
        if (n!.left) q.push(n!.left);
        if (n!.right) q.push(n!.right);
        --len;
      }
    }
  }

  return res;
};