// 32. Longest Valid Parentheses
// https://leetcode.com/problems/longest-valid-parentheses/description/

// 
function longestValidParentheses(s: string): number {
    let maxLen: number = 0;
    let l: number = 0;
    let r: number = 0;
    let lp: number = 0;
    let rp: number = 0;

    while (r < s.length) {
        

        r++;
    }

    return maxLen;
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses(""));