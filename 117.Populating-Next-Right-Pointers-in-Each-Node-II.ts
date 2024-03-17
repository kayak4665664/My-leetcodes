function connect(root: Node | null): Node | null {
  if (root === null) return root;

  let q: Node[] = [];

  q.push(root);

  while (q.length) {
    let len = q.length;
    for (let i = 0; i < len - 1; ++i) q[i].next = q[i + 1];
    for (let i = 0; i < len; ++i) {
      let node = q.shift()!;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }

  return root;
};