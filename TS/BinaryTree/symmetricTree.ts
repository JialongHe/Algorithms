// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/description/?envType=study-plan-v2&envId=top-interview-150

// Binary Tree
function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }

    return isSymmetricSame(root.left, root.right);
};

function isSymmetricSame(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
        return true;
    }

    if (p === null || q === null) {
        return false;
    }
    
    if (p.val === q.val) {
        return isSymmetricSame(p.left, q.right) && isSymmetricSame(p.right, q.left);
    }

    return false;
}