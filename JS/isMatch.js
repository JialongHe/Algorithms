const isMatch = (s, p) => {
    if (s == null || p == null) return false;

    const sLen = s.length, pLen = p.length;  
    const dp = new Array(sLen + 1);
    for(let i = 0; i < dp.length; i++){
        dp[i] = new Array(pLen + 1).fill(false)
    }
    dp[0][0] = true
    for(let j = 2; j <= pLen; j++){
        if(p[j - 1] == "*"){
            dp[0][j] = dp[0][j - 2]
        }
    }
    for(let i = 1; i <= sLen; i++){
        for(let j = 1; j <= pLen; j++){
            if(p[j - 1] != '*'){
                if((s[i - 1] == p[j - 1]) || p[j - 1] == "."){
                    dp[i][j] = dp[i - 1][j - 1]
                }
            }else if(j >= 2){
                dp[i][j] = dp[i][j - 2];
                if(s[i - 1] == p[j - 2] || p[j - 2] == "."){
                    dp[i][j] |= dp[i - 1][j];
                }
            }
        }
    }
    return dp[sLen][pLen]
};