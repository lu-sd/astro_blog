// Definition for a binary tree node.
export default class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val: number = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function preordertraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (!root) return res;
  const stack: TreeNode[] = [];
  stack.push(root);
  while (stack.length) {
    const cur = stack.pop()!;
    res.push(cur.val);
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  return res;
}
