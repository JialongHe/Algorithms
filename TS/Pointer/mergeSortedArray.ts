// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

// Two Pointer
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i: number = m - 1;
    let j: number = n - 1;
    let k: number = m + n - 1;
    
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
};

merge([4,0,0,0,0,0], 1, [1,2,3,5,6], 5);
merge([1,2,3,0,0,0], 3, [2, 5, 6], 3);
merge([0], 0, [1], 1);