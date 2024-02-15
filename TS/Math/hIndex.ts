// 274. H-Index
// https://leetcode.com/problems/h-index/description

function hIndex(citations: number[]): number {
    citations.sort((a, b) => a - b); 
    let res: number = 0;

    for (let i: number = 1; i <= citations.length; i++) {
        res = Math.max(res, Math.min(i, citations[citations.length - i]));
    }

    return res;
};

// console.log(hIndex([3,0,6,1,5]));
// console.log(hIndex([1,3,1]));
// console.log(hIndex([100]));
console.log(hIndex([6,6,4,8,4,3,3,10]));