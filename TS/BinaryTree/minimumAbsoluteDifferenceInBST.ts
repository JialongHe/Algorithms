// 530. Minimum Absolute Difference in BST
// https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/?envType=study-plan-v2&envId=top-interview-150

// Binary Search Tree
function getMinimumDifference(root: TreeNode | null): number {
    const res: number[] = [];

    const inorderTraversal = (root: TreeNode | null): void => {
        if (root !== null) {
            inorderTraversal(root.left);
            res.push(root.val);
            inorderTraversal(root.right);
        }
    }

    inorderTraversal(root);

    let minDiff: number = Infinity;
    for (let i: number = 1; i < res.length; i++) {
        minDiff = Math.min(minDiff, res[i] - res[i - 1]);
    }

    return minDiff;
};