// 230. Kth Smallest Element in a BST
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/?envType=study-plan-v2&envId=top-interview-150

// Binary Search Tree
// Inorder
function kthSmallest2(root: TreeNode | null, k: number): number {
    let res: number[] = [];

    const inorderTraversal = (root: TreeNode | null) => {
        if (root !== null) {
            inorderTraversal(root.left);
            res.push(root.val);
            inorderTraversal(root.right);
        }
    }

    inorderTraversal(root);

    return res[k - 1];
};

// Morris Traversal

/*
Initialize the root as the current node curr.
While curr is not NULL, check if curr has a left child.
If curr does not have a left child, print curr and update it to point to the node on the right of curr.
Else, make curr the right child of the rightmost node in curr's left subtree.
Update curr to this left node.
*/

function kthSmallest(root: TreeNode | null, k: number): number {
    let cur: TreeNode | null = root;

    while (cur !== null) {
        if (cur.left ! == null) {
            const left: TreeNode = cur.left!;
            cur.left = null;
            let rightmost: TreeNode = left;
            while(rightmost.right !== null)
                rightmost = rightmost.right;
            rightmost.right  = cur;

            cur = left;
        } else {
            if(--k === 0)
                break;
            cur = cur.right;
        }
    }

    return cur?.val || -1;    
};