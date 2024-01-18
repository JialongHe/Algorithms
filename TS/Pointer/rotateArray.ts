// 189. Rotate Array
// https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

// Two Pointer
function rotate(nums: number[], k: number): void {
    k = k % nums.length;
    nums.reverse();
    reverseFromIndex(nums, 0, k - 1);
    reverseFromIndex(nums, k, nums.length - 1);
    // console.log(nums);
};

function reverseFromIndex(nums: number[], start: number, end: number) {
    while (start < end) {
        let temp: number = nums[start];
        nums[start++] = nums[end];
        nums[end--] = temp;
    }
}

rotate([1,2,3,4,5,6,7], 3);
rotate([-1,-100,3,99], 2);