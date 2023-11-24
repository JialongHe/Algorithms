// O(nlogn)
function minPairSum2(nums: number[]): number {
    let maxVal: number = 0;

    nums.sort((a, b) => a - b)
    for (let i: number = 0; i < nums.length / 2; i++) {
        const pairVal: number = nums[i] + nums[nums.length - 1 - i]
        if (pairVal > maxVal) {
            maxVal = pairVal;
        }
    }
    return maxVal;
};

// advanced
// O(n)
function minPairSum(nums: number[]): number {
    let maxSum: number = Number.MIN_SAFE_INTEGER;
    let minNum: number = Number.MAX_SAFE_INTEGER;
    let maxNum: number = Number.MIN_SAFE_INTEGER;

    // space for time based on the constraints 1 < nums[i] < 10000
    const frequency = new Array<number>(100001).fill(0)
    nums.forEach(num => {
        frequency[num]++;
        minNum = Math.min(minNum, num);
        maxNum = Math.max(maxNum, num);
    });

    let low = minNum;
    let high = maxNum;

    while (low <= high) {
        if (frequency[low] === 0) {
            low++;
        } else if (frequency[high] === 0) {
            high--;
        } else {
            frequency[low]--;
            frequency[high]--;
            maxSum = Math.max(low + high, maxSum);
        }
    }
    return maxSum;
};

console.log(minPairSum([9,2,10,1,10,4,8,9,7,6,8,10,8,6,5,4,3,4,2,10]));