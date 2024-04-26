// 399. Evaluate Division
// https://leetcode.com/problems/evaluate-division/description/?envType=study-plan-v2&envId=top-interview-150

// DFS
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    interface Graph {
        [key: string]: {
            [key: string]: number
        };
    };
    const graph: Graph = {};

    for (let i: number = 0; i < equations.length; i++) {
        const [a, b]: string[] = equations[i];
        if (!graph[a])
            graph[a] = {};
        if (!graph[b])
            graph[b] = {};
        graph[a][b] = values[i];
        graph[b][a] = 1 / values[i];
    };

    let dfs = function(src: string, target: string, seen: Set<string>): number {
        if (!graph[src]) {
            return -1;
        };
        if (src === target) {
            return 1;
        };
        if (graph[src][target]) {
            return graph[src][target];
        };
        for (const route in graph[src]) {
            if (seen.has(route)) {
                continue;
            };
            const res: number = dfs(route, target, seen.add(src));
            if (res > 0) {
                return graph[src][route] * res;
            };
        }
        return -1;
    };

    return queries.map(q => dfs(q[0], q[1], new Set<string>()));
};

console.log(calcEquation([["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]], [3.0,4.0,5.0,6.0], [["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]]));