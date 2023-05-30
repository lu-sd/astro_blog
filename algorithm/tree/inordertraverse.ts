import TreeNode from "./preordertraverse";
function inordertraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: TreeNode[] = [];
  // Use a cursor node to traverse the tree
  let cur: TreeNode | null = root;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop() as TreeNode | null;
    if (cur) {
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
}
