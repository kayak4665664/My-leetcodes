function buildTree(preorder: number[], inorder: number[]): TreeNode | null {

  if (preorder.length === 0) return null;

  let val = preorder[0];
  let root = new TreeNode(val);
  let mid = inorder.indexOf(val);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};