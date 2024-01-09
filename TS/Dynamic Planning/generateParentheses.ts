// 22. Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/description/

// DFS/DP
function generateParenthesis(n: number): string[] {
    let res: string[] = [];

    function dfs(s: string, left: number, right: number): void {
        if (s.length === n * 2) {
            res.push(s);
            return;
        }

        if (left < n) {
            dfs(s + '(', left + 1, right);
        }

        if (right < left) {
            dfs(s + ')', left, right + 1);
        }
    }

    dfs('', 0, 0);
    return res;
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(3));