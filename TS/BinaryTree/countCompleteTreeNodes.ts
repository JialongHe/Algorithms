// 222. Count Complete Tree Nodes
// https://leetcode.com/problems/count-complete-tree-nodes/description/?envType=study-plan-v2&envId=top-interview-150

// Brute Force
function countNodes2(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    return 1 + countNodes2(root.left) + countNodes2(root.right);
};

// Optimized
function height(root: TreeNode | null): number {
    return root === null ? -1 : 1 + height(root.left);
}

function countNodes(root: TreeNode | null): number {
    let h: number = height(root);
    let nodes: number = 0;

    while (root !== null) {
        if (height(root.right) === h - 1) {
            nodes += 1 << h;
            root = root.right;
        } else {
            nodes += 1 << h - 1;
            root = root.left;
        }
        h--;
    }

    return nodes;
};
