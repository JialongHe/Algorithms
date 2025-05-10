// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-interview-150

// Hashmap
function longestConsecutive(nums: number[]): number {
    let res: number = 0;
    let map: Map<number, number> = new Map<number, number>();
    for (let num of nums) {
        map.set(num, 1);
    };
    console.log(map);
    for (let num of nums) {
        const temp: number | undefined = map.get(num - 1);
        console.log(temp);
        if (temp !== undefined) {
            let cur: number = temp;
            while (map.get(num) !== undefined) {
                cur++;
                map.set(num, cur);
                res = Math.max(cur, res);
                num++;
            }
        } else {
            map.set(num, 1);
        }
    }
    return res;
};

console.log(longestConsecutive([100,4,200,1,3,2]));