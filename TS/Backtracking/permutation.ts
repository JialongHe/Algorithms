// 46. Permutations
// https://leetcode.com/problems/permutations/description/?envType=study-plan-v2&envId=top-interview-150

// backtrack
function permute(nums: number[]): number[][] {
    if (nums.length < 1) {
        return [];
    }

    let res: number[][] = [];

    let backtrack = function(state: number[], toAddQ: number[]) {
        if (toAddQ.length < 1) {
            res.push(state);
        } else {
            for (let i: number = 0; i < toAddQ.length; i++) {
                backtrack([...state, toAddQ[i]], toAddQ.filter((val, index) => index !== i));
            }
        }
    }
    backtrack([], nums);

    return res;
};

console.log(permute([1, 2, 3]));