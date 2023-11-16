var lengthOfLongestSubstring = function(s) {
    let max = 0, last = -1;
    let temp = new Map();

    for(let i = 0; i < s.length; i++){
        const ch = s.charAt(i);
        if(temp.has(ch) && temp.get(ch) > last){
            last = temp.get(ch);
            temp.set(ch, i);
        }else{
            max = Math.max(max, i - last)
            temp.set(ch, i);
        }
    }

    return max
};

console.log(lengthOfLongestSubstring("abcabcbb"))