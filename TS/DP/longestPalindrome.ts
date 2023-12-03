function longestPalindrome(s: string): string {
    if (s.length < 2) {
        return s;
    }

    let maxStr: string = s[0];
    let maxLen: number = 1;

    for (let i: number = 0; i < s.length; i++) {
        let l: number = i;
        let r: number = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        if (r - l + 1 > maxLen) {
            maxLen = r - l + 1;
            maxStr = s.slice(l + 1, r)
        }
        if (i + 1 < s.length && s[i] === s[i + 1]) {
            l = i;
            r = i + 1;
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                l--;
                r++;
            }
            if (r - l + 1 > maxLen) {
                maxLen = r - l + 1;
                maxStr = s.slice(l + 1, r)
            }
        }
    }

    return maxStr;
};

console.log(longestPalindrome("babad"))