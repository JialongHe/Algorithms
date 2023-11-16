var reverseWords = function(s) {
    let temp = s.trim();
    let res = "";

    for(let i = s.length -1, j = s.length - 1; i >= 0;){
        while(i >= 0 && temp.charAt(i) != ' '){
            i--;
        }
        res += temp.substring(i + 1, j + 1) + " ";
        while(i >= 0 && temp.charAt(i) == ' '){
            i--;
        }
        j = i;
    }
    return res.trim();
};