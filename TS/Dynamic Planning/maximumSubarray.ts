// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/?envType=study-plan-v2&envId=top-interview-150

// Dynamic Planning
function maxSubArray(nums: number[]): number {
    let maxVal: number = nums[0];

    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i-1] > 0) {
            nums[i] += nums[i - 1];
        }
        maxVal = nums[i] > maxVal ? nums[i] : maxVal   
    }
    return maxVal;
};

console.log(maxSubArray([5,4,-1,7,8]))