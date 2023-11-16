var longestPalindrome = function(s) {
    let res = 0;
    let temp = new Map();

    for(const ch of s){
        if(!temp.has(ch)){
            temp.set(ch, 1)
        }else{
            temp.set(ch, temp.get(ch) + 1)
        }
    }
    temp.forEach(function(key){
        if(key % 2 && !(res % 2)){
            res += key;
        }else{
            res += parseInt(key / 2) * 2;
        }
    })

    return res
};

console.log(longestPalindrome("abccccdd"));