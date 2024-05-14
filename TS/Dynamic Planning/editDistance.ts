// 72. Edit Distance
// https://leetcode.com/problems/edit-distance/description/?envType=study-plan-v2&envId=top-interview-150

// DP
function minDistance(word1: string, word2: string): number {
    let m: number = word1.length;
    let n: number = word2.length;

    let dp: number[][] = Array.from({length: m + 1}, () => Array(n + 1).fill(0));;

    for (let i: number = 1; i <= m; i++) {
        dp[i][0] = i;
    }
    
    for (let j: number = 1; j <= n; j++) {
        dp[0][j] = j;
    }
    console.log(dp)

    for (let i: number = 1; i <= m; i++) {
        for (let j: number = 1; j <= n; j++ ) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
            }
        }
    }
    console.log(dp)
    return dp[m][n];
};

// TODO: Space Optimized


console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));