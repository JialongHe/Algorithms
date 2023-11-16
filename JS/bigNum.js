const addBigNum= function(str1, str2) {
    let s1 = str1.toString().split(""),
        s2 = str2.toString().split("");
    
    if(s1.length < s2.length){
        const temp = s2;
        s1 = s2;
        s2 = s1;
    }

    let len1 = s1.length,
        len2 = s2.length,
        carry = 0,
        temp = 0;

    while(len1){
        if(len2){
            temp = parseInt(s1[len1 - 1]) + parseInt(s2[len2 - 1]) + carry;
        }else{
            temp = parseInt(s1[len1 - 1]) + carry;
        }
        carry = Math.floor(temp / 10)
        const cur = temp % 10;
        s1[len1 - 1] = cur;
        len1--;
        len2--;
    }
    if(carry){
        s1.unshift(carry)
    }

    return parseInt(s1.join(""))
}

console.log(addBigNum(78, 679))