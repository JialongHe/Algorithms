var calculate = function(s){
    const priority = {'(':0, ")":0, '*': 2,'/': 2,'+': 1,'-': 1}
    let cal = (opt, n1, n2) =>{
        if(opt == "+"){
            return n1+n2
        }else if(opt == "-"){
            return n1-n2
        }else if(opt == "*"){
            return n1*n2
        }else if(opt == "/"){
            return Math.floor(n1/n2)
        }
    }

    const len = s.length;
    const stackNum = [],
        stackOpt = [];
    let n1, n2, res, opt;

    for(let i = 0; i < len; i++){
        if(s[i] == " "){
            continue
        }
        let temp = s[i];
        let num = 0;
        if((temp <= "9" && temp >= "0")){
            while(i < len && (temp <= "9" && temp >= "0")){
                num = num * 10 + parseInt(temp);
                i++;
                temp = s[i];
            }
            i--;
            stackNum.push(num)
        }else{
            if(temp == "("){
                stackOpt.push(temp)
            }else if(temp == ")"){
                opt = stackOpt.pop()
                while(opt != "("){
                    n2 = stackNum.pop();
                    n1 = stackNum.pop();
                    res = cal(opt, n1, n2);
                    stackNum.push(res)
                    opt = stackOpt.pop()
                }
            }else{
                while(stackOpt.length && priority[stackOpt[stackOpt.length - 1]] >= priority[temp]){
                    opt = stackOpt.pop();
                    n2 = stackNum.pop();
                    n1 = stackNum.pop();
                    res = cal(opt, n1, n2);
                    stackNum.push(res);
                }
                stackOpt.push(temp);
            }
        }
    }

    while(stackOpt.length){
        opt = stackOpt.pop();
        n2 = stackNum.pop();
        n1 = stackNum.pop();
        res = cal(opt, n1, n2);
        stackNum.push(res);
    }
    return stackNum[0]
} 

console.log(calculate("((   (   (6 * 9 )  / 5)   - (  (   9 +  5)  -(  4* 2 ))  )  /( (  (  4*6  ) +   (1+  2  ) ) - (  (   10  + 3 )+( 3+ 3 )  ))  )"))