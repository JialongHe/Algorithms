// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150

// Two Pointers
function isSubsequence(s: string, t: string): boolean {
    if (s.length > t.length) {
        return false;
    }
    if (s.length < 1) {
        return true;
    }

    let lt: number = 0;
    let ls: number = 0;

    while (lt < t.length) {
        if (s[ls] === t[lt]) {
            ls++;
            if (ls === s.length) {
                return true;
            }
        }
        lt++;
    }
    
    return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));