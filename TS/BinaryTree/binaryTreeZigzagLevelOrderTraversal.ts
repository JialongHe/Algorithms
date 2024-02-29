// 103. Binary Tree Zigzag Level Order Traversal
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/?envType=study-plan-v2&envId=top-interview-150

// Binary Tree
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
        return [];
    }
    
    let res: number[][] = [];
    let queue: TreeNode[] = [root];
    let zigzag: boolean = true;

    while (queue.length > 0) {
        let queueCount: number = queue.length;
        let tempNodeList: number[] = [];

        for (let i: number = 0; i < queueCount; i++) {
            let node: TreeNode = queue.shift()!;
            if (zigzag) {
                tempNodeList.push(node.val);
            } else {
                tempNodeList.unshift(node.val);
            }

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        res.push(tempNodeList);
        zigzag = !zigzag;
    }

    return res;
};