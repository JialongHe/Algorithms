/// 153. Find Minimum in Rotated Sorted Array
/// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

// Binary Search
function findMin(nums: number[]): number {
    // -5000 <= nums[i] <= 5000
    let res: number = 5000;
    let low: number = 0;
    let high: number = nums.length - 1;

    while (low <= high) {
        let mid: number = Math.floor((low + high) / 2);

        res = res < nums[mid] ? res : nums[mid];
        // console.log(`low: ${low}, mid: ${mid}, high: ${high}, nums[mid]: ${nums[mid]}, res: ${res}`)
        if (nums[low] <= nums[mid] && nums[mid] >= nums[high]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return res;
};

console.log(findMin([4,5,6,7,0,1,2]));