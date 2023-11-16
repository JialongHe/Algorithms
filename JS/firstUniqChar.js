var firstUniqChar = function(s) {
    let map = new Map();
    for(const ch of s){
        map.set(ch, !map.has(ch))
    }
    for(const ch of s){
        if(map.get(ch)){
            return ch
        }
    }
    return ' '
};