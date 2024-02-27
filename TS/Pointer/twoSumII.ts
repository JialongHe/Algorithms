// 167. Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150

// Two Pointers
function twoSum(numbers: number[], target: number): number[] {
    let l: number = 0;
    let r: number = numbers.length - 1;

    while (l < r) {
        let temp: number = numbers[l] + numbers[r];
        console.log(`l:${l}, r:${r}, temp:${temp}`);
        if (temp > target) {
            r--;
        } else if (temp < target){
            l++;
        } else {
            return [l + 1, r + 1];
        }
    }

    return [];
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([-1,0], -1))