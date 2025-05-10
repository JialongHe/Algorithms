// 139. Word Break
// https://leetcode.com/problems/word-break/description/?envType=study-plan-v2&envId=top-interview-150

// Dynamic Planning
function wordBreak(s: string, wordDict: string[]): boolean {
    // 0. default
    // 1. denots word start
    // 2. denots word end
    // 3. denots word start and end
    let dp: number[] = Array(s.length).fill(0);

    for (const word of wordDict) {
        let i: number = s.indexOf(word);
        if (i !== -1) {
            dp[i] = 1;
            dp[i + word.length - 1] = 2;
            if (word.length === 1) {
                dp[i] = 3;
            }
        }
    }
    console.log(dp);
    for () {
        
    }

    return dp[s.length] === 2;
};

console.log(wordBreak("leetcode", ["leet","code"]))
console.log(wordBreak("applepenapple", ["apple","pen"]))
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"]))