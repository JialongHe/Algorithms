/// 34. Find First and Last Position of Element in Sorted Array
/// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// Binary Search
function searchRange(nums: number[], target: number): number[] {
    let low: number = 0;
    let high: number = nums.length - 1;
    let firstIndex: number = -1;
    let lastIndex: number = -1;

    // Find First Index
    while (low <= high) {
        let mid: number = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            firstIndex = mid;
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if (firstIndex === -1) {
        return [-1, -1];
    }

    // Find Last Index
    low = 0;
    high = nums.length - 1;
    while (low <= high) {
        let mid: number = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            lastIndex = mid;
            low = mid + 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return [firstIndex, lastIndex];
};

console.log(searchRange([5,7,7,8,8,10], 6));
console.log(searchRange([5,7,7,8,8,10], 8));