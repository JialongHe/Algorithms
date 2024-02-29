// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150

// Binary Tree Recursive
function maxDepth2(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// Binary Tree Improved
function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};