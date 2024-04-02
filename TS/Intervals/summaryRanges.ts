// 228. Summary Ranges
// https://leetcode.com/problems/summary-ranges/description/?envType=study-plan-v2&envId=top-interview-150

function summaryRanges(nums: number[]): string[] {
    let res: string[] = [];
    let str: string = '';
    let start: number = nums[0];

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1)
            continue;
        str = (nums[i - 1] === start) ? `${start}` : `${start}->${nums[i - 1]}`;
        res.push(str);
        start = nums[i];
    }
    return res;
};