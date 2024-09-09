/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leaves1 = [];
  const leaves2 = [];

  function dfs(node, isOne) {
    if (!node) return;

    if (!node.left && !node.right) {
      if (isOne) leaves1.push(node.val);
      else leaves2.push(node.val);

      return;
    }

    if (node.left) dfs(node.left, isOne);
    if (node.right) dfs(node.right, isOne);
  }

  dfs(root1, true);
  dfs(root2, false);

  const res1 = leaves1.join('.');
  const res2 = leaves2.join('.');

  return res1 === res2;
};