// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/description/?envType=study-plan-v2&envId=top-interview-150

// Inorder Traversal
function isValidBST3(root: TreeNode | null): boolean {
    const temp: number[] = [];

    const inorderTraversal = (root: TreeNode | null): void => {
        if (root !== null) {
            inorderTraversal(root.left);
            temp.push(root.val);
            inorderTraversal(root.right);
        }
    }

    inorderTraversal(root);

    for (let i: number = 1; i < temp.length; i++) {
        if (temp[i - 1] >= temp[i]) {
            return false;
        }
    }

    return true;
};

// Recursive
function isValidBST2(root: TreeNode | null, minValue: number = Number.NEGATIVE_INFINITY, maxValue: number = Number.POSITIVE_INFINITY): boolean {
    if (root === null) {
        return true;
    }

    if (minValue >= root.val || maxValue <= root.val) {
        return false;
    }

    return isValidBST2(root.left, minValue, root.val) && isValidBST2(root.right, root.val, maxValue);
};

// Morris Traversal (Time & Space Optimized)
function isValidBST(root: TreeNode | null): boolean {
    let cur: TreeNode | null = root;
    let curMin: number = Number.NEGATIVE_INFINITY;

    while (cur !== null) {
        if (cur.left !== null) {
            const left: TreeNode = cur.left;
            let rightmost: TreeNode = left;
            while(rightmost.right !== null)
                rightmost = rightmost.right;

            cur.left = null;
            rightmost.right  = cur;
            cur = left;
        } else {
            if (cur.val <= curMin) {
                return false;
            }
            curMin = cur.val;
            cur = cur.right;
        }
    }

    return true;    
};