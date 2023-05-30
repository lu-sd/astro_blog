// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
import TreeNode from "./preordertraverse";

function levelOrderTraversal(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (!root) return res;
  const queue: TreeNode[] = [root];
  while (queue.length > 0) {
    const level: number[] = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const top = queue.shift();
      if (!top) continue;
      level.push(top.val);
      top?.left && queue.push(top.left);
      top?.right && queue.push(top.right);
    }
    res.push(level);
  }
  return res;
}

// 我们在对二叉树进行层序遍历时，每一次 while 循环其实都对应着二叉树的某一层。只要我们在进入while循环之初，记录下这一层结点个数，然后将这个数量范围内的元素 push 进同一个数组,也就是说只要我们能在 BFS 的过程中感知到当前层级、同时用不同的数组把不同的层级区分开

// During level order traversal of a binary tree, each iteration of the while loop corresponds to a specific level of the tree. By keeping track of the number of nodes in each level before entering the while loop, we can push the elements within that range into the same array. Essentially, if we can perceive the current level during the breadth-first search (BFS) process and use different arrays to differentiate between different levels, we can achieve this separation.
