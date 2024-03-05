// 105. Construct Binary Tree from Preorder and Inorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/?envType=study-plan-v2&envId=top-interview-150

// Morris Traversal
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let root: TreeNode | null = null;
    let top: TreeNode | null = null;
    let pop: TreeNode | null = null;
    let i: number = 0;
    
    for (const val of preorder) {
        let node: TreeNode = new TreeNode(val);

        if (pop !== null) {
            pop.right = node;
            pop = null;
        } else if (top !== null) {
            top.left = node;
        } else {
            root = node;
        }

        node.right = top;
        top = node;

        while (top !== null && top.val == inorder[i]) {
            pop = top;
            top = pop.right;
            pop.right = null;
            i++;
        }
    }

    return root;
};