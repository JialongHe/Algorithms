// 100. Same Tree
// https://leetcode.com/problems/same-tree/description/?envType=study-plan-v2&envId=top-interview-150

// Binary Tree
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
        return true;
    }

    if (p === null || q === null) {
        return false;
    }

    if (p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    
    return false;
};