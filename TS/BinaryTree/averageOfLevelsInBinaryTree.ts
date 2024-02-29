// 637. Average of Levels in Binary Tree
// https://leetcode.com/problems/average-of-levels-in-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150

// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// Binary Tree Space for time
function averageOfLevels2(root: TreeNode | null): number[] {
    let sum: number = 0;
    let count: number = 0;
    let res: number[] = [];
    let nodeList: (TreeNode | null)[] = [root];
    let temp: (TreeNode | null)[] = [];

    while (nodeList.length > 0) {
        sum = 0;
        count = 0;
        temp.push(...nodeList.splice(0));
        while (temp.length > 0) {
            let node: TreeNode = temp.pop()!;
            sum += node.val;
            count++;

            if (node.left !== null) {
                nodeList.push(node.left);
            }
            if (node.right !== null) {
                nodeList.push(node.right)
            }
        }
        res.push(sum / count);
    }

    return res;
};

// Binary Tree Time for Space
function averageOfLevels(root: TreeNode | null): number[] {
    if (root === null)  return [];

    let res: number[] = [];
    let queue: TreeNode[] = [root];

    while (queue.length > 0) {
        let queueCount: number = queue.length;
        let sum:number = 0;

        for (let i: number = 0; i < queueCount; i++) {
            let node: TreeNode = queue.shift()!;
            sum += node.val;
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        res.push(sum / queueCount);
    }

    return res;
};
