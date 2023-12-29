function minWindow2(s: string, t: string): string {
    let l: number = 0;
    let r: number = 0;
    let smap: Map<string, number> = new Map();
    let tmap: Map<string, number> = new Map();
    let res: string = s + "NOT_INCLUDED_FLAG";

    for (let i: number = 65; i <= 90; i++) {
        smap.set(String.fromCharCode(i), 0);
    }
    for (let i: number = 97; i <= 122; i++) {
        smap.set(String.fromCharCode(i), 0);
    }
    for (let char of t) {
        let temp: number = tmap.get(char) === undefined ? 0 : tmap.get(char)!;
        tmap.set(char, temp + 1);
    }
    
    while (r < s.length) {
        let included: boolean = true;
        tmap.forEach((value, key) => {
            if (smap.get(key)! < value) {
                included = false;
            }
        })

        if (!included) {
            smap.set(s[r], smap.get(s[r])! + 1);
            r++;
        } else {
            res = res.length < r - l ? res : s.slice(l, r);
            smap.set(s[l], smap.get(s[l])! - 1);
            l++;
        }
    }

    while (l < s.length) {
        let included: boolean = true;
        tmap.forEach((value, key) => {
            if (smap.get(key)! < value) {
                included = false;
            }
        })

        if (!included) {
            break;
        } else {
            res = res.length < r - l ? res : s.slice(l, r);
            smap.set(s[l], smap.get(s[l])! - 1);
            l++;
        }
    }

    if (res === s + "NOT_INCLUDED_FLAG") res = "";
    return res;
};

function minWindow(s: string, t: string): string {
    let l: number = 0;
    let r: number = 0;
    let counter: number = t.length;
    let map: Map<string, number> = new Map();
    let res: string = s + "NOT_INCLUDED_FLAG";

    for (let char of t) {
        let temp: number = map.get(char) === undefined ? 0 : map.get(char)!;
        map.set(char, temp + 1);
    }
    
    while (r < s.length) {
        if (map.get(s[r]) !== undefined && map.get(s[r])! > 0) {
            counter--;
        }

        map.set(s[r], map.get(s[r])! - 1);
        r++;

        while (counter === 0) {
            res = res.length < r - l ? res : s.slice(l, r);
            if (map.get(s[l]) !== undefined) {
                map.set(s[l], map.get(s[l])! + 1);
                if (map.get(s[l])! > 0) {
                    counter++;
                }
            }
            l++;
        }
    }

    if (res === s + "NOT_INCLUDED_FLAG") res = "";
    return res;
};

console.log(minWindow("a", "aa"));
// console.log(minWindow("ADOBECODEBANC", "ABC"));