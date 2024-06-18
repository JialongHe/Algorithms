// 433. Minimum Genetic Mutation
// https://leetcode.com/problems/minimum-genetic-mutation/?envType=study-plan-v2&envId=top-interview-150

// BFS
function minMutation(startGene: string, endGene: string, bank: string[]): number {
    let q: string[] = [startGene];
    let map: Map<string, number> = new Map<string, number>();
    map.set(startGene, 0);

    while (q.length > 0) {
        const temp: string = q.shift()!;
        for (const gene of bank) {
            if (map.has(gene)) continue;
            let count: number = 0;
            for (let i: number = 0; i < 8; i++) {
                if (gene[i] !== temp[i]) {
                    count++;
                }
            }
            if (count === 1) {
                map.set(gene, map.get(temp)! + 1);
                q.push(gene);
            }
        }
    }

    if (map.has(endGene)) {
        return map.get(endGene)!;
    }
    return -1;
};

console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA","AACCGCTA","AAACGGTA"]));