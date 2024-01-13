// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/description/

// Stack
function isValid(s: string): boolean {
    let stack: string[] = [];

    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === '(' 
            || s[i] === '{'
            || s[i] === '[') {
            stack.push(s[i]);
        }
        if (s[i] === ')' && stack.pop() !== '(') {
            return false;
        }
        if (s[i] === '}' && stack.pop() !== '{') {
            return false;
        }
        if (s[i] === ']' && stack.pop() !== '[') {
            return false;
        }
    }

    if (stack.length === 0) return true;
    return false;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("["));