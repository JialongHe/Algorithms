// 17. Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/?envType=study-plan-v2&envId=top-interview-150

// Brute force
function letterCombinations2(digits: string): string[] {
    const map = [
        ['a', 'b', 'c'], // 2
        ['d', 'e', 'f'], // 3
        ['g', 'h', 'i'], // 4
        ['j', 'k', 'l'], // 5
        ['m', 'n', 'o'], // 6
        ['p', 'q', 'r', 's'], // 7
        ['t', 'u', 'v'], // 8
        ['w', 'x', 'y', 'z'], // 9
    ];

    let res: string[] = [];
    for (const letter of digits) {
        const i = parseInt(letter) - 2;
        if (res.length === 0) {
            res.push(...map[i]);
        } else {
            let temp: string[] = [];
            for (const str of res) {
                for (const el of map[i]) {
                    temp.push(str + el);
                }
            }
            res = temp;
        }
    }

    return res;
};

// console.log(letterCombinations('23'));
console.log(letterCombinations('9'));

// Imporved
function letterCombinations(digits: string): string[] {
    if (digits === "") {
        return [];
    }

    const phoneMap: string[] = [
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    ];
    let res: string[] = [];

    let backtrack = function(combination: string, nextDigits: string) {
        if (nextDigits === "") {
            res.push(combination);
        } else {
            const letters: string = phoneMap[parseInt(nextDigits[0]) - 2];
            for (const letter of letters) {
                backtrack(combination + letter, nextDigits.slice(1));
            }
        }
    }
    backtrack("", digits);

    return res;
};