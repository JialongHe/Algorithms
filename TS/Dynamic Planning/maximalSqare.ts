// 221. Maximal Square
// https://leetcode.com/problems/maximal-square/?envType=study-plan-v2&envId=top-interview-150

function maximalSquare(matrix: string[][]): number {
    let max: number = 0;
    let m: number = matrix.length;
    let n: number = matrix[0].length;
    let dp: number[][] = Array.from({length: m + 1}, () => Array(n + 1).fill(0));

    for (let i: number = 0; i < m; i++) {
        for (let j: number = 0; j < n; j++) {
            if (matrix[i][j] === '0') {
                dp[i + 1][j + 1] = 0;
            } else {
                const temp: number = Math.min(dp[i][j], dp[i][j + 1], dp[i + 1][j]) + 1;
                dp[i + 1][j + 1] = temp;
                max = Math.max(max, temp);
            }
        }
    }

    return max * max;
};

console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));