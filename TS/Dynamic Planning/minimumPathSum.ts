// 64. Minimum Path Sum
// https://leetcode.com/problems/minimum-path-sum/description/?envType=study-plan-v2&envId=top-interview-150

// Dynamic Planning
function minPathSum(grid: number[][]): number {
    let m: number = grid.length;
    let n: number = grid[0].length;

    for (let i: number = 1; i < n; i++) {
        grid[0][i] = grid[0][i - 1] + grid[0][i];
    }
    for (let i: number = 1; i < m; i++) {
        grid[i][0] = grid[i - 1][0] + grid[i][0];
    }
    for (let i: number = 1; i < m; i++) {
        for (let j: number = 1; j < n; j++ ) {
            grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
        }
    }

    return grid[m - 1][n - 1];
};