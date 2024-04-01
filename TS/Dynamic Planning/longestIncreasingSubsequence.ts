// 300. Longest Increasing Subsequence
// https://leetcode.com/problems/longest-increasing-subsequence/description/?envType=study-plan-v2&envId=top-interview-150

// Dynamic Planning O(n^2)
function lengthOfLIS(nums: number[]): number {
    let dp: number[] = [1];
    let max: number = 1;

    for (let i: number = 1; i < nums.length; i++) {
        let j: number = i - 1;
        dp[i] = 1;
        while (j >= 0) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
                max = Math.max(max, dp[i]);
            }
            j--;
        }
    }

    return max;
};

// TODO: 