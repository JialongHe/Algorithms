// 77. Combinations
// https://leetcode.com/problems/combinations/description/?envType=study-plan-v2&envId=top-interview-150

// backtrack
function combine(n: number, k: number): number[][] {
    let res: number[][] = [];

    let backtrack = function(state: number[], lastIndex: number, k: number) {
        if (k === 0) {
            res.push(state);
        } else {
            for (let i = lastIndex; i <= n; i++) {
                backtrack([...state, i], i + 1, k - 1);
            }
        }
    };
    backtrack([], 1, k);
    
    return res;
};

console.log(combine(4, 2));