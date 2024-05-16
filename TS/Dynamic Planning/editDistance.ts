// 72. Edit Distance
// https://leetcode.com/problems/edit-distance/description/?envType=study-plan-v2&envId=top-interview-150

// DP
function minDistance2(word1: string, word2: string): number {
    let m: number = word1.length;
    let n: number = word2.length;

    let dp: number[][] = Array.from({length: m + 1}, () => Array(n + 1).fill(0));;

    for (let i: number = 1; i <= m; i++) {
        dp[i][0] = i;
    }
    
    for (let j: number = 1; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i: number = 1; i <= m; i++) {
        for (let j: number = 1; j <= n; j++ ) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
            }
        }
    }
    return dp[m][n];
};

// Space Optimized
function minDistance(word1: string, word2: string): number {
    let m: number = word1.length;
    let n: number = word2.length;
    let pre: number;

    let cur: number[] = Array(n + 1).fill(0);
    
    for (let j: number = 1; j <= n; j++) {
        cur[j] = j;
    }
    for (let i: number = 1; i <= m; i++) {
        pre = cur[0];
        cur[0] = i;
        for (let j: number = 1; j <= n; j++ ) {
            const temp: number = cur[j];
            if (word1[i - 1] === word2[j - 1]) {
                cur[j] = pre;
            } else {
                cur[j] = Math.min(pre, cur[j - 1], cur[j]) + 1;
            }
            pre = temp;
        }
    }
    return cur[n];
};

console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));