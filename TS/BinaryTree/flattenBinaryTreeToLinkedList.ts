// 114. Flatten Binary Tree to Linked List
// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/?envType=study-plan-v2&envId=top-interview-150

// Recursion | DFS
function flatten(root: TreeNode | null): void {
    function dfs(root: TreeNode | null): TreeNode | null {
        if (!root)  return null;

        const leftTail: TreeNode | null = dfs(root.left);
        const rightTail: TreeNode | null = dfs(root.right);

        if (root.left) {
            leftTail!.right = root.right;
            root.right = root.left;
            root.left = null;
        }

        return rightTail || leftTail || root;
    }

    dfs(root);
};