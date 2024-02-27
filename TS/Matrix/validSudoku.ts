// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/?envType=study-plan-v2&envId=top-interview-150

function isValidSudoku(board: string[][]): boolean {
    let line: number[][] = Array.from({ length: 10 }, () => Array(10).fill(0));
    let col: number[][] = Array.from({ length: 10 }, () => Array(10).fill(0));
    let square: number[][] = Array.from({ length: 10 }, () => Array(10).fill(0));

    for (let i: number = 0; i < 9; i++) {
        for (let j: number = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                let pos: number = parseInt(board[i][j]);
                let pos_square: number = Math.floor(i / 3) + Math.floor(j / 3) * 3;
                if (++line[i][pos] > 1 || ++col[pos][j] > 1 || ++square[pos_square][pos] > 1)  return false;
            }
        }
    }

    return true;
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))
console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))