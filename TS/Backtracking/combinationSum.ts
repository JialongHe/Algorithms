// 39. Combination Sum
// https://leetcode.com/problems/combination-sum/?envType=study-plan-v2&envId=top-interview-150

// backtrack
function combinationSum(candidates: number[], target: number): number[][] {
    let res: number[][] = [];
    candidates.sort((a, b) => a - b);

    let backtrack = function (state: number[], target: number, fromIndex: number) {
        if (target === 0) {
            res.push(state);
        } else if (target > 0) {
            for (let i: number = fromIndex; i < candidates.length; i++) {
                backtrack([...state, candidates[i]], target - candidates[i], i);
            }
        }
    };
    backtrack([], target, 0);

    return res;
};

console.log(combinationSum([2,3,6,7], 7));