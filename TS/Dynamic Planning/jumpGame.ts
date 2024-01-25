// 55. Jump Game
// https://leetcode.com/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150

// Brute force
function canJump2(nums: number[]): boolean {
    if (nums.length === 1)  return true;

    let reachable: boolean[] = Array(nums.length).fill(false);
    reachable[0] = nums[0] > 0;

    for (let i: number = 0; i < nums.length; i++) {
        if (reachable[i] === true) {
            let temp: number = i + nums[i] + 1;
            reachable.fill(true, i + 1, temp > nums.length ? nums.length : temp);
            if (reachable[reachable.length - 1]) {
                return true;
            }
        }
    }

    return reachable[reachable.length - 1];
};

// Dynamic Planning
function canJump(nums: number[]): boolean {
    let n: number = nums.length;
    let steps: number = nums[0];

    for (let i: number = 1; i < n; i++) {
        if (steps === 0) return false;
        steps = Math.max(steps - 1, nums[i]);
    }
    return true;
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
console.log(canJump([0,2,3]));
console.log(canJump([1,0,1,0]));
console.log(canJump([0]));