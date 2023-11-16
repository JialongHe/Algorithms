var countBits = function(num) {
    let res = []
    let i = 0, b = 1;
    res.push(0)

    while(b <= num){
        while(i < b && i + b <= num){
            res[i + b] = res[i] + 1
        }
        i = 0;
        b <<= 1
    }

    return res
};

console.log(countBits(5));