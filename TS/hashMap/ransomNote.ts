// 383. Ransom Note
// https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150

// HashMap
function canConstruct(ransomNote: string, magazine: string): boolean {
    let map: Map<string, number> = new Map<string, number>();

    for (let i: number = 0; i < magazine.length; i++) {
        let key: string = magazine[i];
        map.set(key, (map.get(key) || 0) + 1);
    }

    for (let i: number = 0; i < ransomNote.length; i++) {
        let value = map.get(ransomNote[i]);
        if (value === undefined || value-- < 1) return false;
        map.set(ransomNote[i], value);
    }

    return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));