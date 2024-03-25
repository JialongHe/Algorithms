// 150. Evaluate Reverse Polish Notation
// https://leetcode.com/problems/evaluate-reverse-polish-notation/?envType=study-plan-v2&envId=top-interview-150

// Stack
function evalRPN(tokens: string[]): number {
    let stack: number[] = [];

    for (const token of tokens) {
        const num: number = parseInt(token);
        if (isNaN(num)) {
            const y: number = stack.pop()!;
            const x: number = stack.pop()!;
            let temp: number = 0;
            switch (token) {
                case '+':
                    temp = x + y;
                    break;
                case '-':
                    temp = x - y;
                    break;
                case '*':
                    temp = x * y;
                    break;
                case '/':
                    temp = x / y;
                    temp = temp > 0 ? Math.floor(temp) : Math.ceil(temp);
                    break;
            }
            stack.push(temp);
        } else {
            stack.push(num);
        }
    }
    return stack.pop()!;
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))