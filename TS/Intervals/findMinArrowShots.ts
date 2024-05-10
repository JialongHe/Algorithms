// 452. Minimum Number of Arrows to Burst Balloons
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/?envType=study-plan-v2&envId=top-interview-150

// First try
function findMinArrowShots2(points: number[][]): number {
    let res: number = 0;
    let intervals: number[][] = [];

    points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    // console.log(points);

    for (let point of points) {
        let overlap: boolean = false;
        for (let i: number = 0; i < intervals.length; i++) {
            const interval: number[] = intervals[i];
            if (interval[0] <= point[1] && interval[1] >= point[0]) {
                overlap = true;
                interval[0] = Math.max(point[0], interval[0]);
                interval[1] = Math.min(point[1], interval[1]);
            }
        }
        if (!overlap) {
            intervals.push(point);
        }
    }
    // console.log(intervals);

    return intervals.length;
};

// Improved
function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[0] - b[0]);
    let res = 1;
    let [px, py] = points[0];

    for (let i: number = 1; i < points.length; i++) {
        const [x, y] = points[i];
        if (py >= x) {
            px = Math.max(px, x);
            py = Math.min(py, y);
        } else {
            [px, py] = [x, y];
            res++;
        }
    }

    return res;
};

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));
console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]));
console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]));