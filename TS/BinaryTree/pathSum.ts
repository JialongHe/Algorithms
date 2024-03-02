// 112. Path Sum
// https://leetcode.com/problems/path-sum/description/?envType=study-plan-v2&envId=top-interview-150

// DFS
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) {
        return false;
    }

    if (root.left === null && root.right === null) {
        if (root.val === targetSum) {
            return true;
        }
        return false;
    }

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};