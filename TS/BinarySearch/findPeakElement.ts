// 162. Find Peak Element
// https://leetcode.com/problems/find-peak-element/?envType=study-plan-v2&envId=top-interview-150

// Binary Search
function findPeakElement(nums: number[]): number {
    let low: number = 0;
    let high: number = nums.length - 1;

    while (low < high) {
        let mid: number = Math.floor((low + high) / 2);
        if (nums[mid] > nums[mid + 1]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
};