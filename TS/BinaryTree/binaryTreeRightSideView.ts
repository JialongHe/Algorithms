// 199. Binary Tree Right Side View
// https://leetcode.com/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=top-interview-150

// Binary Tree
function rightSideView(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }

    let res: number[] = [];
    let queue: TreeNode[] = [root];

    while (queue.length > 0) {
        let queueCount: number = queue.length;

        for (let i: number = 0; i < queueCount; i++) {
            let node: TreeNode = queue.shift()!;
            
            if (i === queueCount - 1) {
                res.push(node.val);
            }
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }

    return res;
};