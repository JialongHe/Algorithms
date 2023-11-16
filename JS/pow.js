var myPow = function(x, n) {
    if(n == 0){
        return 1
    }
    if(n < 0){
        x = 1 / x
        n = -n
    }
    let temp = 1
    while(n > 0){
        if(n & 1){
            temp *= x
            n--;
        }
        x *= x
        n /= 2;
    }
    return temp
}