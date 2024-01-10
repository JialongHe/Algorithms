// 32. Longest Valid Parentheses
// https://leetcode.com/problems/longest-valid-parentheses/description/

// Stack
function longestValidParentheses2(s: string): number {
    let stack: number[] = [-1];
    let maxLen: number = 0;

    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (stack.length === 1) {
            stack[0] = i;
        } else {
            stack.pop();
            maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
        }
        // console.log(`stack: ${stack}, i: ${i}, s[i]: ${s[i]} maxLen: ${maxLen}`);
    }

    return maxLen;
};

// DP
function longestValidParentheses(s: string): number {
    let maxLen: number = 0;
    let dp: number[] = new Array(s.length).fill(0);

    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === '(' && s[i] === ')') {
            dp[i] = 2 + (dp[i - 2] || 0);
            maxLen = Math.max(dp[i], maxLen);
        }
        if (s[i - 1] === ')' &&
            s[i] === ')' && 
            s[i - dp[i - 1] - 1] === '(') {
            dp[i] = 2 + dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0);
            maxLen = Math.max(dp[i], maxLen);
        }
    }

    return maxLen;
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses("()(())"))
console.log(longestValidParentheses(""));