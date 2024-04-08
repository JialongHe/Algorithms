// 69. Sqrt(x)
// https://leetcode.com/problems/sqrtx/?envType=study-plan-v2&envId=top-interview-150

// Binary Search
function mySqrt(x: number): number {
    let left: number = 0;
    let right: number = x;

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2);
        if (mid * mid < x) {
            left = mid + 1;
        } else if (mid * mid > x) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return right;
};