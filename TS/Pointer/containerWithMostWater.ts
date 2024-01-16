// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/description/

// Two Pointer
function maxArea(height: number[]): number {
    let res: number = 0;
    let l: number = 0;
    let r: number = height.length - 1;

    while (l < r) {
        let currentWater: number = Math.min(height[l], height[r]) * (r - l);
        res = res > currentWater ? res : currentWater;
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }

    return res;
};

console.log(maxArea([1,1]));
console.log(maxArea([1,8,6,2,5,4,8,3,7]));