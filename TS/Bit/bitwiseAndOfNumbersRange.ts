// 201. Bitwise AND of Numbers Range
// https://leetcode.com/problems/bitwise-and-of-numbers-range/description/?envType=study-plan-v2&envId=top-interview-150

// Bit
function rangeBitwiseAnd(left: number, right: number): number {
    let res: number = left;
    while (left++ < right) {
        res &= left;
    }

    return res;
};