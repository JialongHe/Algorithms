function minSubArrayLen(target: number, nums: number[]): number {    
    if (nums.reduce(
        (pre, cur) => { 
            return pre + cur;
        }, 0) < target) {
        return 0;
    }
    
    let DEFINE_MAX = 1000000000;
    
    let l: number = 0;
    let r: number = 0;
    let minLen: number = DEFINE_MAX;
    let sum: number = 0;

    while (r < nums.length) {
        if (target > sum) {
            sum += nums[r];
            r++;
        } else {
            minLen = Math.min(minLen, r - l);
            sum -= nums[l];
            l++;
        }
    }    
    
    while (sum - nums[l] >= target) {
        sum -= nums[l];
        l++;
    }
    minLen = Math.min(minLen, r - l);
    return minLen;
};


console.log(minSubArrayLen(213, [83, 28, 26, 25, 25, 25, 25, 25, 12, 12, 4, 2]));