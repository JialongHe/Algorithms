function removeElement(nums: number[], val: number): number {
    let countVal: number = 0;
    let lastReplaceIndex: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            while (i < nums.length && nums[i] === val) {
                i++;
                countVal++;
            }
        }
        if (i < nums.length) {
            nums[lastReplaceIndex] = nums[i];
        }
        lastReplaceIndex++;
    }
    return nums.length - countVal;
};

function removeElement2(nums: number[], val: number): number {
    let index: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};

console.log(removeElement2([0,1,2,2,3,0,4,2], 2))