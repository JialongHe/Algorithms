// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/?envType=study-plan-v2&envId=top-interview-150

// HashMap
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length)
        return false;

    let n: number = 0;
    let map: Map<string, number> = new Map<string, number>();

    for (const letter of s) {
        map.set(letter, (map.get(letter) || 0) + 1);
        n++;
    }

    for (const letter of t) {
        const temp: number | undefined = map.get(letter);
        if (temp !== undefined && temp > 0) {
            map.set(letter, temp - 1);
            n--;
        } else {
            return false;
        }
    }

    return n > 0 ? false : true;
};

console.log(isAnagram("anagram", "nagaram"));