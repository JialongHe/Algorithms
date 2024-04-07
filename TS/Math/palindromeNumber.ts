// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/?envType=study-plan-v2&envId=top-interview-150

function isPalindrome(x: number): boolean {
    let s: string = x.toString();
    let l: number = 0;
    let r: number = s.length - 1;

    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};