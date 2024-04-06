// 136. Single Number
// https://leetcode.com/problems/single-number/description/?envType=study-plan-v2&envId=top-interview-150

// Bit
function singleNumber(nums: number[]): number {
    return nums.reduce((pre, cur) => pre ^ cur, 0);
};