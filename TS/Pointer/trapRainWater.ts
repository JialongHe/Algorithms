// 42. Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/description/

// Two Pointer
function trap(height: number[]): number {
    let res: number = 0;
    let leftMax: number = 0;
    let rightMax: number = 0;
    let left: number = 0;
    let right: number = height.length - 1;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (height[left] < height[right]) {
            res += leftMax - height[left++];
        } else {
            res += rightMax - height[right--];
        }
    }

    return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));