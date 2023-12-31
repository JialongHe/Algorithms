/// 80. Remove Duplicates from Sorted Array II 
/// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

// Pointer
function removeDuplicates(nums: number[]): number {
    let l: number = 1;
    let r: number = 1;
    let dup: boolean = false;

    while (r < nums.length) {
        // first ele get in q
        if (nums[r] === nums[r - 1] && !dup) {
            dup = true;
            nums[l] = nums[r];
            l++;
        }
        // when meet different element, update dup
        if (nums[r] !== nums[r - 1]) {
            dup = false;
            nums[l] = nums[r];
            l++;
        }
        // nums[r] === nums[r - 1] && dup
        r++;
    }

    // console.log(nums);
    return l;
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));