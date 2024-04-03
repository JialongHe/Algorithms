// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-interview-150

// O(n)
function merge(intervals: number[][]): number[][] {
    intervals.sort((a: number[], b: number[]) => a[0] - b[0]);

    let res: number[][] = [];
    let cur: number[] = intervals[0];
    
    for (let i: number = 1; i < intervals.length; i++) {
        if (intervals[i][0] > cur[1]) {
            res.push(cur);
            cur = intervals[i];
        } else {
            cur[1] = Math.max(cur[1], intervals[i][1]);
        }
    }
    res.push(cur);

    return res;
};

console.log(merge([[1,4],[0,4]]));