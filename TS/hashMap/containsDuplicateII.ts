// 219. Contains Duplicate II
// https://leetcode.com/problems/contains-duplicate-ii/?envType=study-plan-v2&envId=top-interview-150

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map: Map<number, number> = new Map<number, number>();
    
    for (let i: number = 0; i < nums.length; i++) {
        const temp: number | undefined = map.get(nums[i]);
        if (temp !== undefined && Math.abs(temp! - i) <= k) {
            return true;
        } else {
            map.set(nums[i], i);
        }
    }

    return false;
};

console.log(containsNearbyDuplicate([1,0,1,1], 1));