// 106. Construct Binary Tree from Inorder and Postorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/?envType=study-plan-v2&envId=top-interview-150

// Recursion
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (!inorder.length)    return null;

    let rootVal: number = postorder.pop()!;
    let midIndex: number = inorder.findIndex(val => val === rootVal);

    const root: TreeNode = new TreeNode(rootVal);

    root.right = buildTree(inorder.slice(midIndex + 1), postorder);
    root.left = buildTree(inorder.slice(0, midIndex), postorder);

    return root;
};