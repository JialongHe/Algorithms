function threeSum(nums: number[]): number[][] {
    const sorted: number[] = nums.sort((a, b) => a - b);
    const res: number[][] = [];

    for (let i: number = 0; i < sorted.length; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) continue;

        let middle: number = sorted[i];
        let l: number = i + 1;
        let r: number = sorted.length - 1;

        while(l < r) {
            const leftEl: number = sorted[l];
            const rightEl: number = sorted[r];
            const value: number = leftEl + middle + rightEl;

            if (value < 0) {
                l++;
            } else if (value > 0) {
                r--;
            } else {
                res.push([middle, leftEl, rightEl])
                while (r > l && sorted[r] === sorted[r - 1]) {
                    r--;
                }
                while (r > l && sorted[l] === sorted[l + 1]) {
                    l++;
                }
                r--;
            }
        }
    }

    return res;
};

console.log(threeSum([0,0,0,0,0,0]))