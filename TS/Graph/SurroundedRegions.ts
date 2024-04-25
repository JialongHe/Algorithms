// 130. Surrounded Regions
// https://leetcode.com/problems/surrounded-regions/description/?envType=study-plan-v2&envId=top-interview-150

// dfs
function solve(board: string[][]): void {
    let m: number = board.length;
    let n: number = board[0].length;
    let dfs = function (x: number, y: number) {
        if (x >= m || y >= n || x < 0 || y < 0 || board[x][y] !== 'O') {
            return;
        }
        board[x][y] = '#';
        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
    };

    for (let i: number = 0; i < m; i++) {
        if (board[i][0] === 'O') {
            dfs(i, 0);
        }
        if (board[i][n - 1] === 'O') {
            dfs(i, n - 1);
        }
    }

    for (let i: number = 0; i < n; i++) {
        if (board[0][i] === 'O') {
            dfs(0, i);
        }
        if (board[m - 1][i] === 'O') {
            dfs(m - 1, i);
        }
    }

    for (let i: number = 0; i < m; i++) {
        for (let j: number = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
            if (board[i][j] === '#') {
                board[i][j] = 'O';
            }
        }
    }
};

solve([["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]]);