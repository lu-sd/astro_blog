// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

import TreeNode from "./preordertraverse";

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  const successor = (node: TreeNode): number => {
    node = node.right as TreeNode;
    while (node.left) {
      node = node.left;
    }
    return node.val;
  };

  const predecessor = (node: TreeNode): number => {
    node = node.left as TreeNode;
    while (node.right) {
      node = node.right;
    }
    return node.val;
  };

  if (!root) {
    return null;
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.left) {
    root.val = predecessor(root);
    root.left = deleteNode(root.left, root.val);
  } else if (root.right) {
    root.val = successor(root);
    root.right = deleteNode(root.right, root.val);
  } else {
    // !root.left &&!root.right,then delete directly
    root = null;
  }
  return root;
}
