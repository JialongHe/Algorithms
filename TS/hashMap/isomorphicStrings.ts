// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150

// HashMap
function isIsomorphic(s: string, t: string): boolean {
    let map: Map<string, string> = new Map<string, string>();
    let usedMap: Map<string, boolean> = new Map<string, boolean>();

    for (let i: number = 0; i < s.length; i++) {
        let sc: string = s[i];
        let tc: string = t[i];
        let temp: string | undefined = map.get(sc);
        let used: boolean | undefined = usedMap.get(tc);

        if (temp === undefined && !used) {
            map.set(sc, tc);
            usedMap.set(tc, true);
        } else if (temp !== tc){
            return false;
        }
    }

    return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));