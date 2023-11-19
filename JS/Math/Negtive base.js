//  1    1    1   1   1
// 16    -8   4  -2   1

/*** 
 * -6 1110
 * -5 1111
 * -4 1100
 * -3 1101
 * -2 10
 * -1 11
 * 0 0
 * 1 1
 * 2 110
 * 3 111
 * 4 100
 * 5 101
 * 6 11010
 * 7 11011
 * 8 11000
 * 9 11001
 * */

var baseNeg2 = function(n) {
    let res = [];
    while (n != 0) {
        let rem = n % -2;
        n = Math.floor(n / -2);
        if (rem < 0) {
            rem += Math.abs(-2);
            n++;
        }
        res.push(rem)
    }
    return res.reverse().join("");
};

console.log(baseNeg2(2))
console.log(baseNeg2(5))
console.log(baseNeg2(-4))

// or any nagetive base
var transformNegtiveBase = function(num, base) {
    let res = [];
    while (num != 0) {
        let rem = num % base;
        num = Math.floor(num / base);
        if (rem < 0) {
            rem += Math.abs(base);
            num++;
        }
        res.push(rem)
    }
    return res.reverse().join("");
};

console.log(transformNegtiveBase(2, -2))