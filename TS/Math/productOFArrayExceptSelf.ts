// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150

// O(n)? First try
function productExceptSelf2(nums: number[]): number[] {
    let pro: number = 1;
    let proWithout0: number = 1;
    let productedWith0MoreThanOnce: number = -1;
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] === 0){ 
            productedWith0MoreThanOnce++;
        } else {
            proWithout0 *= nums[i];
        }
        pro *= nums[i];
    }

    for (let i: number = 0; i < nums.length; i++) {
        // number 0
        if (nums[i] == 0) {
            if (productedWith0MoreThanOnce > 0) {
                nums[i] = 0;
            } else {
                nums[i] = proWithout0;
            }
        } else {
            nums[i] = pro / nums[i];
        }
    }

    return nums;
};

// Improved Solution
function productExceptSelf(nums: number[]): number[] {
    let n: number = nums.length;
    let res: number[] = Array(n);
    res[0] = 1;

    for (let i: number = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    
    let right: number = 1;
    for (let i: number = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }

    return res;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));