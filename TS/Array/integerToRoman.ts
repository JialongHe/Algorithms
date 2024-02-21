// 12. Integer to Roman
// https://leetcode.com/problems/integer-to-roman/description/?envType=study-plan-v2&envId=top-interview-150

// 1 <= num <= 3999
// IV 4 / IX 40
// XL 50 / XC 90
// CD 500 / CM 900 
function intToRoman(num: number): string {
    let result: string = "";
    let check: number[] = [1000,500,100,50,10,5,1];
    let str: string[] = ['M','D','C','L','X','V','I'];
    let val: number;

    val = Math.floor(num / 1000);
    for (let i = 0; i < val; i++) {
        result += 'M';
    }
    num = num % (1000);

    val = Math.floor(num / 100);
    if(val == 9){
        result += "CM";
    } else if(val > 4){
        result += "D";
        for(let i = 0; i < val - 5; i++){
            result += "C";
        }
    } else if(val == 4){
        result += "CD";
    } else{
        for(let i = 0; i < val; i++){
            result += "C";
        }
    }
    num = num % 100;

    val = Math.floor(num / 10);
    if(val == 9){
        result += "XC";
    } else if(val > 4){
        result += "L";
        for(let i = 0; i < val - 5; i++){
            result += "X";
        }
    } else if(val == 4){
        result += "XL";
    } else{
        for(let i = 0; i < val; i++){
            result += "X";
        }
    }
    num = num % 10;

    val = Math.floor(num / 1);
    if(val == 9){
        result += "IX";
    } else if(val > 4){
        result += "V";
        for(let i = 0; i < val - 5; i++){
            result += "I";
        }
    } else if(val == 4){
        result += "IV";
    } else{
        for(let i = 0; i < val; i++){
            result += "I";
        }
    }

    return result;
};

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(58));
console.log(intToRoman(1994));