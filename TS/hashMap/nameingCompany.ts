function distinctNames(ideas: string[]): number {
    let res: number = 0;
    let prefixMap: Map<string, string[]> = new Map<string, string[]>;

    ideas.forEach((idea: string) => {
        let prefix: string = idea.substring(0, 1);
        let suffix: string = idea.substring(1, idea.length);
        let dictionary: string[] | undefined = prefixMap.get(prefix)
        if (dictionary !== undefined) {
            dictionary.push(suffix);
            prefixMap.set(prefix, dictionary)
        } else {
            prefixMap.set(prefix, [suffix])
        }
    })

    prefixMap.forEach((value1, key1) => {
        prefixMap.forEach((value2, key2) => {
            if (key1 !== key2) {
                let intersect: number = 0;
                value1.forEach((suffix: string) => {
                    if (value2.includes(suffix)) {
                        intersect++;
                    }
                })
                res += (value1.length - intersect) * (value2.length - intersect)
            }
        })
    })
    return res;
};

console.log(distinctNames(["coffee","donuts","time","toffee"]))