// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

import TreeNode from "./preordertraverse";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null || root.val === val) return root;
  if (root.val < val) return searchBST(root.right, val);
  if (root.val > val) return searchBST(root.left, val);
  return null;
}
