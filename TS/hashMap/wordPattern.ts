// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/description/?envType=study-plan-v2&envId=top-interview-150

// HashMap
function wordPattern(pattern: string, s: string): boolean {
    let mapPattern: Map<string, string> = new Map<string, string>();
    let mapS: Map<string, string> = new Map<string, string>();
    let slist: string[]= s.split(" ");
    
    if (slist.length !== pattern.length) {
        return false;
    }

    for (let i: number = 0; i < slist.length; i++) {
        if (!mapPattern.has(pattern[i])) {
            mapPattern.set(pattern[i], slist[i]);
        } else if (mapPattern.get(pattern[i]) !== slist[i]) return false;
        
        if (!mapS.has(slist[i])) {
            mapS.set(slist[i], pattern[i]);
        } else if (mapS.get(slist[i]) !== pattern[i]) return false;
    }

    return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));