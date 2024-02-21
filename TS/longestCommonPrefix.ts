// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150

function longestCommonPrefix(strs: string[]): string {
    let res: string = "";
    strs.sort();
    let first: string = strs[0];
    let last: string = strs[strs.length - 1];

    for (let i: number = 0; i < Math.min(first.length, last.length); i++) {
        if (first[i] !== last[i]) {
            break;
        }
        res += first[i];
    }

    return res;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));