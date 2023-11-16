var minWindow = function(s, t) {
    const map = {}
    let l = 0, r = 0, lastL, minLen = s.length + 1;
    let n = s.length,
        diff = 0;

    for(const ch of t){
        if(map[ch] != undefined){
            map[ch]++;
        }else{
            diff++;
            map[ch] = 1;
        }
    }
    for(; r < n; r++){
        const sch = s[r];
        if(map[sch] != undefined){
            map[sch]--;
        }
        if(map[sch] == 0){
            diff--;
        }
        while(diff == 0){
            const lch = s[l];
            if(minLen > (r - l + 1)){
                minLen = r - l + 1;
                lastL = l;
            }
            if(map[lch] != undefined){
                map[lch]++;
                if(map[lch] > 0){
                    diff++;
                }
            }
            l++;
        } 
    }
    return s.slice(lastL, lastL + minLen)
};

console.log(minWindow("a", 'a'))
