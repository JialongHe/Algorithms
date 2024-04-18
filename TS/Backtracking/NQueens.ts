// 52. N-Queens II
// https://leetcode.com/problems/n-queens-ii/?envType=study-plan-v2&envId=top-interview-150

// backtrack
function totalNQueens(n: number): number {
    let board: number[][] = Array.from({length: n}, () => Array(n).fill(0));
    let res: number = 0;

    let backtrack = function(ith: number) {
        if (ith === n) {
            res += 1;
            return;
        }
        for (let i: number = 0; i < n; i++) {
            if (board[ith][i] === 0) {
                for (let j: number = ith + 1; j < n; j++) {
                    board[j][i] += 1;
                    const diff: number = j - ith;
                    if (i - diff >= 0) {
                        board[j][i - diff] += 1;
                    }
                    if (i + diff < n) {
                        board[j][i + diff] += 1;
                    }
                }
                backtrack(ith + 1);
                for (let j: number = ith + 1; j < n; j++) {
                    board[j][i] -= 1;
                    const diff: number = j - ith;
                    if (i - diff >= 0) {
                        board[j][i - diff] -= 1;
                    }
                    if (i + diff < n) {
                        board[j][i + diff] -= 1;
                    }
                }
            }
        }
    }
    backtrack(0);

    return res;
};

console.log(totalNQueens(4));
console.log(totalNQueens(5));