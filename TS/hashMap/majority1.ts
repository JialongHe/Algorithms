function majorityElement(nums: number[]): number {
    let maxCount: number = 0;
    let maxIndex: number = 0;
    let map = new Map<number, number>();

    for (let i: number = 0; i < nums.length; i++) {
        let currentCount: number | undefined = map.get(nums[i]);
        if (currentCount !== undefined) {
            ++currentCount;
            map.set(nums[i], currentCount);
            
            if (currentCount > maxCount) {
                maxCount = currentCount;
                maxIndex = i;
            }

            if (currentCount > nums.length / 2) {
                maxIndex = i;
                break;
            }
        } else {
            maxCount = 1;
            map.set(nums[i], 1);
        }
    }

    return nums[maxIndex];
};

console.log(majorityElement([3,2,3]))