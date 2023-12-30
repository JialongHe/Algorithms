function lengthOfLongestSubstring(s: string): number {
    let maxLen: number = 0;
    let l: number = 0;
    let r: number = 0;
    let map: Map<string, boolean> = new Map();

    for (let char of s) {
        map.set(char, false);
    }

    while (r < s.length) {
        if (map.get(s[r]) !== true) {
            map.set(s[r], true);
            r++;
            maxLen = Math.max(maxLen, r - l);
        } else {
            map.set(s[l], false);
            l++;
        }
    }

    return maxLen;
};

console.log(lengthOfLongestSubstring("pwwkew"));