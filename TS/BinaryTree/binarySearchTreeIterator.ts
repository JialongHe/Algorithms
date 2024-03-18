// 173. Binary Search Tree Iterator
// https://leetcode.com/problems/binary-search-tree-iterator/description/?envType=study-plan-v2&envId=top-interview-150

// Morris Traversal
class BSTIterator {
    pointer: TreeNode = new TreeNode()

    constructor(root: TreeNode | null) {
        if (!root) {
            return;
        }

        let cur: TreeNode | null = root;
        
        // Move the pointer to the leftmost node
        while (cur.left) {
            let left: TreeNode = cur.left;
            cur.left = null;
            let rightmost: TreeNode = left;
            while (rightmost.right) {
                rightmost = rightmost.right;
            }
            rightmost.right = cur;
            cur = left;
        }
        
        // watch node
        this.pointer.right = cur;
    }

    next(): number {
        let cur: TreeNode | null = this.pointer;

        if (!cur || !cur.right) {
            return -1;
        }
        
        cur = cur.right;
        while (cur.left) {
            let left: TreeNode = cur.left;
            cur.left = null;
            let rightmost: TreeNode = left;
            while(rightmost.right) {
                rightmost = rightmost.right;
            }
            rightmost.right = cur;
            cur = left;
        }

        this.pointer = cur;
        return this.pointer.val;
    }

    hasNext(): boolean {
        if (this.pointer.right)
            return true;
        return false;
    }
}