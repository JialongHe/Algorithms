// 191. Number of 1 Bits
// https://leetcode.com/problems/number-of-1-bits/?envType=study-plan-v2&envId=top-interview-150

// Bit
function hammingWeight(n: number): number {
    let res: number = 0;
    while (n) {
        res += n & 1;
        n >>>= 1;
    }

    return res;
};

console.log(hammingWeight(11));