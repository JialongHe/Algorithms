// 200. Number of Islands
// https://leetcode.com/problems/number-of-islands/description/?envType=study-plan-v2&envId=top-interview-150

// dfs
function numIslands(grid: string[][]): number {
    let res = 0;
    let bfs = function (i: number, j: number) {
        if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] === '0') {
            return;
        }
        grid[i][j] = '0';
        bfs(i - 1, j);
        bfs(i + 1, j);
        bfs(i, j - 1);
        bfs(i, j + 1);
    };

    for (let i: number = 0, j: number = 0; i < grid.length && j < grid[0].length; ) {
        if (grid[i][j] === '1') {
            res++;
            bfs(i, j);
        }
        j++;
        if (j >= grid[0].length) {
            j = 0;
            i++;
        }
    }

    return res;
};

console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]))