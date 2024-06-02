// 63. Unique Paths II
// https://leetcode.com/problems/unique-paths-ii/?envType=study-plan-v2&envId=top-interview-150

// Dynamic Planning
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    if (obstacleGrid[0][0] === 1)
        return 0;
    let m: number = obstacleGrid.length;
    let n: number = obstacleGrid[0].length;
    let dp: number[][] = Array.from({length: m}, () => Array(n).fill(0));
    
    dp[0][0] = 1;
    for (let i: number = 1; i < n; i++) {
        dp[0][i] = obstacleGrid[0][i] === 0 ? dp[0][i - 1] : 0;
    }
    for (let i: number = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] === 0 ? dp[i - 1][0] : 0;
    }

    for (let i: number = 1; i < m; i++) {
        for (let j: number = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] === 0 ? (dp[i - 1][j] + dp[i][j - 1]) : 0;
        }
    }
    
    return dp[m - 1][n - 1];
};

console.log(uniquePathsWithObstacles([[0,0]]))