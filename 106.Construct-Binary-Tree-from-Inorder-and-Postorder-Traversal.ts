function buildTree(inorder: number[], postorder: number[]): TreeNode | null {

  if (postorder.length === 0) return null;

  let val = postorder[postorder.length - 1];
  let root = new TreeNode(val);
  let mid = inorder.indexOf(val);

  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
  root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, -1));

  return root;
};