// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/description/?envType=study-plan-v2&envId=top-interview-150

// Binary Search
function searchInsert(nums: number[], target: number): number {
    let low: number = 0;
    let high: number = nums.length - 1;
    
    while (low < high) {
        let mid: number = Math.floor((low + high) / 2)

        if (target <= nums[mid]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    if (target <= nums[low]) {
        return low;
    } else {
        return low + 1;
    }
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2))