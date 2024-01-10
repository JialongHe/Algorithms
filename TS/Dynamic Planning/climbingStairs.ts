// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/description/

// DFS
function climbStairs2(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }

    return climbStairs2(n - 1) + climbStairs2(n - 2);
};

// DP
function climbStairs(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }

    // Space Optimization
    let prev: number = 1;
    let curr: number = 1;

    for (let i: number = 2; i <= n; i++) {
        let newCurr = prev + curr;
        prev = curr;
        curr = newCurr;
    }

    return curr;
};

console.log(climbStairs(2));
console.log(climbStairs(3));