/// 26. Remove Duplicates from Sorted Array
/// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/// SlidingWindow
function removeDuplicates2(nums: number[]): number {
    let l: number = 0;
    let r: number = 0;

    while (r < nums.length) {
        while (r + 1 < nums.length && nums[r] === nums[r + 1]) {
            r++;
        }
        // r === num.length - 1

        nums[l] = nums[r];
        l++;
        r++;
        // minimum l, r  === 1
    }

    if (nums[nums.length - 1] !== nums[l - 1]) {
        nums[l - 1] = nums[nums.length - 1];
        l++;
    }

    // console.log(nums);
    return l;
};

// Upgraded Pointer
function removeDuplicates(nums: number[]): number {
    let l: number = 1;
    let r: number = 1;

    while (r < nums.length) {
        if (nums[r] !== nums[r - 1]) {
            nums[l] = nums[r];
            l++;
        }
        r++;
    }

    // console.log(nums);
    return l;
};

// console.log(removeDuplicates([1,1]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));