// 45. Jump Game II
// https://leetcode.com/problems/jump-game-ii/description/

// Dynamic Planning
function jump(nums: number[]): number {
    let n: number = nums.length;
    let jumpCount: number = 0;
    let availableSteps: number = 0;
    let currentIndex: number = 0;

    for (let i: number = 0; i < n - 1; i++) {
        if (n - 1 <= i + nums[i]) {
            return jumpCount + 1;
        }
        availableSteps = Math.max(availableSteps, i + nums[i]);
        if (i === currentIndex) {
            jumpCount += 1;
            currentIndex = availableSteps;
        }
    }

    return jumpCount;
};

console.log(jump([2,3,1,1,4]));
console.log(jump([3,2,1,0,4]));