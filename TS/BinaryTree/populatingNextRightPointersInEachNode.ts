// 117. Populating Next Right Pointers in Each Node II
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/?envType=study-plan-v2&envId=top-interview-150


class NNode {
    val: number
    left: NNode | null
    right: NNode | null
    next: NNode | null
    constructor(val?: number, left?: NNode, right?: NNode, next?: NNode) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}

// BFS
function connect(root: NNode | null): NNode | null {
    if (!root)  return null;

    let tempQ: NNode[] = [root];

    while (tempQ.length > 0) {
        let length: number = tempQ.length;

        for (let i: number = 0; i < length; i++) {
            let node: NNode = tempQ.shift()!;

            if (i !== length - 1)
                node.next = tempQ[0];
            if (node.left)
                tempQ.push(node.left);
            if (node.right)
                tempQ.push(node.right);
        }
    }
    
    return root;
};