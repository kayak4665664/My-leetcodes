/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

let max = 0;


function dfs(node, depth) {
  if (node === null) {
    if (depth > max) max = depth;
    return;
  }

  dfs(node.left, depth + 1);
  dfs(node.right, depth + 1);
}

var maxDepth = function (root) {
  max = 0;
  dfs(root, 0);

  return max;
};