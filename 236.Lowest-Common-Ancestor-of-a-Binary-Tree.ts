let path_1: TreeNode[] = [], path_2: TreeNode[] = [];
let t_1 = 0, t_2 = 0;
let f_1 = false, f_2 = false;

function dfs(root: TreeNode) {
  if (f_1 && f_2) return;
  if (!f_1) path_1.push(root);
  if (!f_2) path_2.push(root);

  if (root.val === t_1) f_1 = true;
  if (root.val === t_2) f_2 = true;

  if ((!f_1 || !f_2) && root.left) dfs(root.left);
  if ((!f_1 || !f_2) && root.right) dfs(root.right);

  if (!f_1) path_1.pop();
  if (!f_2) path_2.pop();
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root || !p || !q) return null;
  path_1 = [];
  path_2 = [];
  t_1 = p.val;
  t_2 = q.val;
  f_1 = false;
  f_2 = false;
  let res: TreeNode | null = root;
  let set: Set<number> = new Set();
  dfs(root);
  if (path_1.length < path_2.length) {
    for (let t of path_2) set.add(t.val);
    for (let i = path_1.length - 1; i >= 0; --i) {
      if (set.has(path_1[i].val)) {
        res = path_1[i];
        break;
      }
    }
  } else {
    for (let t of path_1) set.add(t.val);
    for (let i = path_2.length - 1; i >= 0; --i) {
      if (set.has(path_2[i].val)) {
        res = path_2[i];
        break;
      }
    }
  }
  return res;
};