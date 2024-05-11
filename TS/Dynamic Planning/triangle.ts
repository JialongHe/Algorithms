// 120. Triangle
// https://leetcode.com/problems/triangle/description/?envType=study-plan-v2&envId=top-interview-150

// Dynamic Planning
function minimumTotal(triangle: number[][]): number {
    for (let i: number = triangle.length - 2; i >= 0; i--) {
        for (let j: number = 0; j < triangle[i].length; j++) {
            triangle[i][j] = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + triangle[i][j];
        }
    }

    return triangle[0][0];
};