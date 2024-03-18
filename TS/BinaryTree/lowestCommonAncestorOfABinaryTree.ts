// 236. Lowest Common Ancestor of a Binary Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150

// Recursion
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!root || root === p || root === q) {
        return root;
    }
    const left: TreeNode | null = lowestCommonAncestor(root.left, p, q);
    const right: TreeNode | null = lowestCommonAncestor(root.right, p, q);
    return left && right ? root : left || right;
};