// 108. Convert Sorted Array to Binary Search Tree
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/?envType=study-plan-v2&envId=top-interview-150

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) {
        return null;
    }
    const center: number = Math.floor(nums.length / 2);
    return new TreeNode(nums[center], sortedArrayToBST(nums.slice(0, center)), sortedArrayToBST(nums.slice(center + 1)));
};