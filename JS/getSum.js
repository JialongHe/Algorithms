var getSum = function(a, b) {
    let c;
    while(b){
        c = a;
        a ^= b;
        b = (c & b) << 1;
    }
    return a
};