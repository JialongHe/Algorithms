var patternMatching = function(pattern, value) {
   let map = new Map()
   let set = new Set()

    let match = (pInd, vInd) => {
        if(pInd == pattern.length){
            return vInd == value.length
        }

        const ch = pattern[pInd]
        if(map.has(ch)){    
            const cmpStr = map.get(ch)
            if((vInd + cmpStr.length) > value.length || cmpStr != value.slice(vInd, vInd + cmpStr.length)){
                return false
            }
            return match(pInd + 1, vInd + cmpStr.length)
        }
        
        for(let i = vInd - 1; i < value.length; i++){
            const word = value.slice(vInd, i + 1);
            if(set.has(word)){
                continue
            }
            map.set(ch, word)
            set.add(word)
            if(match(pInd + 1, i + 1))  return true
            map.delete(ch)
            set.delete(word)
        }
        return false
    }

    return match(0, 0)
};

console.log(patternMatching("a",""))