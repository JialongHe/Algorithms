var numDecodings = function(s) {
    if(!s.length)   return 0

    let len = s.length;
    let dp = new Array(len).fill(0);
    let nLast = parseInt(s[0])

    if(s[0] == '0') return 0
    dp[0] = 1

    for(let i = 1; i < s.length; i++){
        const n = parseInt(s[i])
        const value = n + nLast * 10

        if(n)    dp[i] = dp[i - 1]
        if(value >= 10 && value <= 26){
            if(i == 1){
                dp[i]++;
            }else{
                dp[i] += dp[i - 2]
            }
        }
        nLast = n
    }
    
    return dp[len - 1]
};

console.log(numDecodings("100"));