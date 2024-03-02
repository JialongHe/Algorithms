// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150

// Binary Tree
function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null
    }
    
    let temp: TreeNode | null = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = temp;

    return root;
};