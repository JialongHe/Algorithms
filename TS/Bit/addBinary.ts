// 67. Add Binary
// https://leetcode.com/problems/add-binary/description/?envType=study-plan-v2&envId=top-interview-150

// Bit
function addBinary(a: string, b: string): string {
    let carry: number = 0;
    let res: string = "";
    let length: number = Math.max(a.length, b.length);
    let i: number = 1;

    while (i <= length) {
        let x: number = Number(a[a.length - i] || 0);
        let y: number = Number(b[b.length - i] || 0);
        let sum: number = x + y + carry;
        carry = sum > 1 ? 1 : 0;
        res = sum % 2 + res;
        i++;
    }

    if (carry) {
        res = carry.toString(2) + res;
    }
    return res;
};

console.log(addBinary("11", "1"));