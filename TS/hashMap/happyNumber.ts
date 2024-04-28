// 202. Happy Number
// https://leetcode.com/problems/happy-number/description/?envType=study-plan-v2&envId=top-interview-150

// Math
function isHappy(n: number): boolean {
    while (n >= 10) {
        let str: string[] = String(n).split('');
        n = 0;
        for (const s of str) {
            n += Number(s) ** 2;
        }
    }

    if (n === 1 || n === 7)
        return true;

    return false;
};

// Hashmap