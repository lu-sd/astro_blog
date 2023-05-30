// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
import TreeNode from "./preordertraverse";
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    root = new TreeNode(val);
    return root;
  }
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
}
