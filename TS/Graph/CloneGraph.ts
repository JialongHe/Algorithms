// 133. Clone Graph
// https://leetcode.com/problems/clone-graph/?envType=study-plan-v2&envId=top-interview-150

class GNode {
    val: number
    neighbors: GNode[]
    constructor(val?: number, neighbors?: GNode[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}

function cloneGraph(node: GNode | null): GNode | null {
    if (!node)
        return null;

    let visited = new Map<GNode, GNode>();
    let dfs = function (node: GNode): GNode {

        if (visited.has(node)) {
            return visited.get(node)!;
        }

        const copy = new GNode(node.val);
        visited.set(node, copy);
        for (const neighbor of node.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }
        return copy;
    };
    return dfs(node);
};