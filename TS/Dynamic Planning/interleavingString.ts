// 97. Interleaving String
// https://leetcode.com/problems/interleaving-string/description/?envType=study-plan-v2&envId=top-interview-150

// Recursion
function isInterleave2(s1: string, s2: string, s3: string): boolean {
    let m: number = s1.length;
    let n: number = s2.length;

    if (m + n !== s3.length) {
        return false;
    }
    
    let res: boolean = false;
    let backtrace = function (b1: string, b2: string, b3: string) {
        if (!b1.length && !b2.length && !b3.length) {
            res = true;
            return;
        }
        if (b1[0] === b3[0]) {
            backtrace(b1.slice(1), b2, b3.slice(1));
        }
        if (b2[0] === b3[0]) {
            backtrace(b1, b2.slice(1), b3.slice(1));
        }
    }
    backtrace(s1, s2, s3);

    return res;
};

// Dynamic Planning
function isInterleave3(s1: string, s2: string, s3: string): boolean {
    let m: number = s1.length;
    let n: number = s2.length;

    if (m + n !== s3.length) {
        return false;
    }

    let dp: boolean[][] = Array.from({length: m + 1}, () => Array(n + 1).fill(false));

    dp[0][0] = true;
    for (let i: number = 1; i <= m; i++) {
        dp[i][0] = s1[i - 1] === s3[i - 1] && dp[i - 1][0];
    }
    for (let i: number = 1; i <= n; i++) {
        dp[0][i] = s2[i - 1] === s3[i - 1] && dp[0][i - 1];
    }
    
    for (let i: number = 1; i <= m; i++) {
        for (let j: number = 1; j<= n; j++) {
            dp[i][j] = (dp[i - 1][j] && s3[i + j - 1] === s1[i - 1]) || (dp[i][j - 1] && s3[i + j - 1] === s2[j - 1]);
        }
    };

    return dp[m][n];
};

// Space Optimized
function isInterleave(s1: string, s2: string, s3: string): boolean {
    let m: number = s1.length;
    let n: number = s2.length;

    if (m + n !== s3.length) {
        return false;
    }

    let pre: boolean[] = Array(n + 1);
    let cur: boolean[] = Array(n + 1);

    pre[0] = true;
    for (let i: number = 1; i <= n; i++) {
        pre[i] = s2[i - 1] === s3[i - 1] && pre[i - 1];
    }
    cur = Array.from(pre);
    for (let i: number = 1; i <= m; i++) {
        cur[0] = s1[i - 1] === s3[i - 1] && pre[0]; 
        for (let j: number = 1; j<= n; j++) {
            cur[j] = (pre[j] && s3[i + j - 1] === s1[i - 1]) || (cur[j - 1] && s3[i + j - 1] === s2[j - 1]);
        }
        pre = Array.from(cur);
    };

    return cur[n];
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));