var baseNeg2 = function(n) {
    let res = [];
    while (n != 0) {
        let rem = n % -2;
        n = Math.floor(n / -2);
        if (rem < 0) {
            rem += 2;
            n++;
        }
        res.push(rem)
        console.log(`rem: ${rem}, n: ${n}, res: ${res}`)
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