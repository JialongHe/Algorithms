/// 187. Repeated DNA Sequences
/// https://leetcode.com/problems/repeated-dna-sequences/description/

/// HashMap
function findRepeatedDnaSequences(s: string): string[] {
    if (s.length < 11) {
        return [];
    }    

    let res: string[] = [];
    let i: number = 10;
    // storage for speed
    let pattern: Map<string, boolean> = new Map();
    // undefined: haven't detected this sequnce of dna before, mark it
    // false: first time detected this sequnce of dna, push to res
    // true: second time detected this sequnce of dna, ignore

    while (i <= s.length) {
        let dna: string = s.slice(i - 10, i);
        if (pattern.get(dna) === undefined) {
            pattern.set(dna, false)
        } else if (pattern.get(dna) === false) {
            pattern.set(dna, true)
            res.push(dna);
        }
        
        i++;
    }

    return res;
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"))
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));