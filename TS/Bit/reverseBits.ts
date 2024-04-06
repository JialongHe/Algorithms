// 190. Reverse Bits
// https://leetcode.com/problems/reverse-bits/description/?envType=study-plan-v2&envId=top-interview-150

// Bit
function reverseBits(n: number): number {
	if (!n) return 0;
    let res: number = 0;

    for (let i = 0; i < 32; i++) {
        res = res * 2 + (n & 1);
        n >>>= 1;
    }

    return res;
};