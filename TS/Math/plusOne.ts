// 66. Plus One
// https://leetcode.com/problems/plus-one/description/?envType=study-plan-v2&envId=top-interview-150

function plusOne(digits: number[]): number[] {
    let i: number = 1;
    let carry: number = 1;

    while (i <= digits.length) {
        const index: number = digits.length - i;
        const temp: number = digits[index];
        let sum: number = temp + carry;

        carry = Math.floor(sum / 10);
        sum %= 10;
        digits[index] = sum;
        i++;
    }
    if (carry > 0) {
        digits.unshift(carry);
    }

    return digits;
};

console.log(plusOne([1, 2, 3]))
console.log(plusOne([9, 9]))