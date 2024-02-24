// 68. Text Justification
// https://leetcode.com/problems/text-justification/description/?envType=study-plan-v2&envId=top-interview-150

// greedy
function fullJustify(words: string[], maxWidth: number): string[] {
    let res: string[] = [];
    let resIndex: number = 0;
    let word: string = words[0];
    let line: string[] = [word];
    let lineWordLength: number = word.length;

    for (let i: number = 1; i < words.length; i++) {
        word = words[i];
        // Should be spaces between words, spaces total length required = line.length - 1
        // but with the word to come, spaces total length required = line.length
        let leastRequiredLength: number = lineWordLength + line.length + word.length;
        if (leastRequiredLength <= maxWidth) {
            line.push(word);
            lineWordLength += word.length;
        } else {
            // Evenly pad spaces
            let spaceToInsert: number = maxWidth - lineWordLength;
            let wordSpace: number = line.length - 1;
            let lineString: string = "";

            if (wordSpace === 0) {
                // only have one word in this line
                lineString = line[0] + ' '.repeat(spaceToInsert);
            } else {
                // we have mutiple words in this line, and need to arrange the spaces
                let spacesEvenCount: number = Math.floor(spaceToInsert / wordSpace);
                let remainSpaceCount: number = spaceToInsert % wordSpace;

                let spaces: string = ' '.repeat(spacesEvenCount);

                for (let j: number = 0; j < remainSpaceCount; j++) {
                    line[j] += ' '
                }
                lineString = line.join(spaces);
            }

            // Store this line and go next line, reset the line info
            res[resIndex++] = lineString;
            line = [word];
            lineWordLength = word.length;
        }   
    }

    // last line should be left justified
    let lineString: string = line.join(' ');
    res[resIndex] = lineString + ' '.repeat(maxWidth - lineString.length);

    return res;
};

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))
console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16))
console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20))