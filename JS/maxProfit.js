var maxProfit = function(prices) {
    if(!prices.length){
        return 0;
    }
    let pro = 0;
    let min = prices[0];
    for(let i = 1, len = prices.length; i < len; i++){
        min = Math.min(min, prices[i]);
        pro = Math.max(pro, prices[i] - min);
    }

    return pro;
};