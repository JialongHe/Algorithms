// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/description/?envType=study-plan-v2&envId=top-interview-150

// O(n)
function insert2(intervals: number[][], newInterval: number[]): number[][] {
    let newIntervals: number[][] = [];

    for (let i: number = 0; i < intervals.length; i++) {
        if (newInterval[1] >= intervals[i][0] && newInterval[0] <= intervals[i][1]) {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
        } else {
            newIntervals.push(intervals[i]);
        }
    }
    
    newIntervals.push(newInterval);
    newIntervals.sort((a, b) => a[0] - b[0])

    return newIntervals;
};

// Imporved time complexity, still O(n)
function insert(intervals: number[][], newInterval: number[]): number[][] {
    let res: number[][] = [];
    let i: number = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i++]);
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i++][1])];
    }
    res.push(newInterval);

    while (i < intervals.length) {
        res.push(intervals[i++]);
    }

    return res;
};


console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));