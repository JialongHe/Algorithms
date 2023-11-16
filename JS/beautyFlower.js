var n = 3;
var m = 5;
let arr = [
    [7, 23, -5, -24, 16],
    [5, 21, -4, 10, 23],
    [-21, 5, -4, -20, 20]
]

let dp = []
for(let i = 0; i <= n; i++){
    dp[i] = new Array(m + 1).fill(0)
}

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= m; j++){
        dp[i][j] = Math.max(arr[i - 1][j - 1] + dp[i - 1][j - 1], dp[i][j - 1])
    }
}
console.log(dp)