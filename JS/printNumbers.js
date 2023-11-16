var printNumbers = function(n) {
    res = [];
    end = 1;
    for(let i = 0; i < n; i++){
        end = end * 10
    }

    for(let i = 1; i < end; i++){
        res.push(i)
    }
    console.log(res)
    return res
};

