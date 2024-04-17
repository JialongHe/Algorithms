// 79. Word Search
// https://leetcode.com/problems/word-search/description/?envType=study-plan-v2&envId=top-interview-150

// backtrack
function exist(board: string[][], word: string): boolean {
    let m: number = board[0].length;
    let n: number = board.length;
    let res: boolean = false;

    let backtrack = function(x: number, y: number, wordIndex: number) {
        if (wordIndex === word.length) {
            res = true;
            return;
        }
        if (x >= m || y >= n || x < 0 || y < 0) {
            return;
        }
        if (board[y][x] !== word[wordIndex]) {
            return;
        }

        let temp: string = board[y][x];
        board[y][x] = "*";
        backtrack(x + 1, y, wordIndex + 1);
        backtrack(x - 1, y, wordIndex + 1);
        backtrack(x, y + 1, wordIndex + 1);
        backtrack(x, y - 1, wordIndex + 1);
        board[y][x] = temp;
    }

    for (let i: number = 0; i < m; i++) {
        for (let j: number = 0; j < n; j++) {
            if (board[j][i] === word[0]) {
                backtrack (i, j, 0);
            }
        }
    }

    return res;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))