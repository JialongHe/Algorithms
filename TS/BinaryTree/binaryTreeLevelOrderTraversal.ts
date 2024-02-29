// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/description/?envType=study-plan-v2&envId=top-interview-150

// Definition for a binary tree node.

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return [];
    
    let res: number[][] = [];
    let nodeList: TreeNode[] = [root];

    while (nodeList.length > 0) {
        let nodeCount = nodeList.length;
        let tempList: number[] = [];

        for (let i: number = 0; i < nodeCount; i++) {
            let node: TreeNode = nodeList.shift()!;
            tempList.push(node.val);

            if (node.left !== null) {
                nodeList.push(node.left);
            }
            if (node.right !== null) {
                nodeList.push(node.right);
            }
        }
        res.push(tempList);
    }

    return res;
};