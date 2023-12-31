var romanToInt = function(s) {
    let map = {
        "I": 1, 
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    let res = 0;
    let arr = s.split("")
    for (let i = 0; i < arr.length; i++) {
        const val = map[arr[i]];
        if (i < arr.length - 1 && val < map[arr[i + 1]]) {
            res -= val;
        } else {
            res += val;
        }
    }
    return res
};

console.log(romanToInt("LVIII"))