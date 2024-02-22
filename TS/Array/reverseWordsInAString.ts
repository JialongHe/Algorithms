// 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

function reverseWords(s: string): any {
    return s.trim().split(' ').reverse().filter((value: string) => value.length > 0).join(" ");
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));