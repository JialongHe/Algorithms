var numWays = function(n) {
    let n1 = 1, n2 = 1;
    let temp;

    for(let i = 0; i < n; i++){
        temp = (n1 + n2) % 1000000007;
        n1 = n2;
        n2 = temp;
    }

    return n1
};