// 198. House Robber
// https://leetcode.com/problems/house-robber/description/?envType=study-plan-v2&envId=top-interview-150

// Dynamic Planning
function rob2(nums: number[]): number {
    if (nums.length <= 2) {
        return Math.max(...nums);
    }    

    let dp: number[] = Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i: number = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[nums.length - 1];
};

// Space Optimized
function rob(nums: number[]): number {
    if (nums.length <= 2) {
        return Math.max(...nums);
    }

    let pre: number = nums[0];
    let cur: number = Math.max(nums[0], nums[1]);

    for (let i: number = 2; i < nums.length; i++) {
        const newCur: number = Math.max(pre + nums[i], cur);
        pre = cur;
        cur = newCur; 
    }

    return cur;
};

console.log(rob([2,7,9,3,1]));
console.log(rob([1,100,2,3,100]));
console.log(rob([1,1,1,1]));