// 129. Sum Root to Leaf Numbers
// https://leetcode.com/problems/sum-root-to-leaf-numbers/description/?envType=study-plan-v2&envId=top-interview-150

// BFS
function sumNumbers2(root: TreeNode | null): number {
    let res: number = 0;
    let nodeQ: TreeNode[] = [root!];
    let valueQ: number[] = [root!.val];

    while (nodeQ.length > 0) {
        let node: TreeNode = nodeQ.shift()!;
        let value: number = valueQ.shift()!;

        if (!node.left && !node.right) {
            res += value;
        }
        if (node.left !== null) {
            nodeQ.push(node.left);
            valueQ.push(value * 10 + node.left.val);
        }
        if (node.right !== null) {
            nodeQ.push(node.right);
            valueQ.push(value * 10 + node.right.val);
        }
    }

    return res;
};

// DFS
function sumNumbers(root: TreeNode | null): number {
    let res = 0;
    function dfs(node: TreeNode, value: number) {
        let temp: number = value * 10 + node.val;
        if (!node.left && !node.right) {
            res += temp;
        }
        if (node.left !== null)
            dfs(node.left, temp);
        if (node.right !== null)
            dfs(node.right, temp);
    }

    dfs(root!, 0);

    return res;
};