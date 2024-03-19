// 124. Binary Tree Maximum Path Sum
// https://leetcode.com/problems/binary-tree-maximum-path-sum/description/?envType=study-plan-v2&envId=top-interview-150

// Recursion
function maxPathSum(root: TreeNode | null): number {
    let maxPathSum: number = Number.NEGATIVE_INFINITY;

    function findMaxPath(node: TreeNode | null): number {
        if (!node)  return 0;

        const leftSum: number = findMaxPath(node.left);
        const rightSum: number = findMaxPath(node.right);

        const currentMaxSum: number = Math.max(
            node.val,
            node.val + leftSum,
            node.val + rightSum
        );

        maxPathSum = Math.max(
            maxPathSum,
            currentMaxSum,
            node.val + leftSum + rightSum
        );

        return currentMaxSum;
    }

    findMaxPath(root);
    return maxPathSum;
};