// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

function strStr(haystack: string, needle: string): number {
    if (needle.length > haystack.length) {
        return -1;
    }

    let i: number;
    let j: number;
    for (i = 0, j = needle.length; j <= haystack.length ; i++, j++) {
        if (haystack.substring(i, j) === needle) {
            return i;
        }
    }

    return -1;
};

console.log(strStr("sadbutsad", "sad"))
console.log(strStr("leetcode", "leeto"))