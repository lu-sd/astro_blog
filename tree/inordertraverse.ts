// The popping sequence for a postorder traversal should follow the rule of "left -> right -> root". Compared to preorder traversal, the most obvious change in this order is that the position of the root node has moved from the first to the last in the sequence.
// 145:Given the root of a binary tree, return the postorder traversal of its nodes' values.
import TreeNode from "./preordertraverse";
function inordertraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (!root) return res;
  const stack: TreeNode[] = [];
  stack.push(root);
  while (stack.length) {
    let cur = stack.pop();
    if (!cur) continue;
    res.unshift(cur.val);
    if (cur.left) {
      stack.push(cur.left);
    }
    if (cur.right) {
      stack.push(cur.right);
    }
  }
  return res;
}
