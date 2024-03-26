// 74. Search a 2D Matrix
// https://leetcode.com/problems/search-a-2d-matrix/description/?envType=study-plan-v2&envId=top-interview-150

// Binary Search 2 Times
function searchMatrix2(matrix: number[][], target: number): boolean {
    let xLow: number = 0, yLow: number = 0;
    let xHigh: number = matrix[0].length - 1, yHigh: number = matrix.length - 1;

    while (yLow < yHigh) {
        let mid: number = Math.ceil((yLow + yHigh) / 2);
        if (target < matrix[mid][0]) {
            yHigh = mid - 1;
        } else {
            yLow = mid;
        }
    }
    while (xLow <= xHigh) {
        let mid: number = Math.floor((xLow + xHigh) / 2);
        if (target === matrix[yLow][mid]) {
            return true;
        } else if (target < matrix[yLow][mid]) {
            xHigh = mid - 1;
        } else {
            xLow = mid + 1;
        }
    }

    return false;
};

// Binary Search with Matrix
function searchMatrix(matrix: number[][], target: number): boolean {
    const row = matrix.length;
    const column = matrix[0].length

    let left = 0;
    let right = row * column - 1  

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        const [targetRow, targetColumn] = getPosition(middle, column)
        const targetValue = matrix[targetRow][targetColumn]

        if (targetValue === target) {
            return true;
        } else if (targetValue > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return false
};

function getPosition(value: number,  totalColumn: number) {
    const targetRow = Math.floor(value / totalColumn)
    const targetColumn = value % totalColumn
    return [targetRow, targetColumn]
}