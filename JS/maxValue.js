var maxValue = function(grid) {
    const dp = []
    const row = grid.length;
    const col = grid[0].length;
    dp[0] = []
    dp[0][0] = grid[0][0]
    for(let i = 1; i < row; i++){
        dp[i] = [];
        dp[i][0] = grid[i][0] + dp[i-1][0];
    }
    for(let j = 1; j < col; j++){
        dp[0][j] = grid[0][j] + dp[0][j-1];
    }

    for(let i = 1; i < row; i++){
        for(let j = 1; j < col; j++){
            dp[i][j] = Math.max(grid[i][j] + dp[i - 1][j], grid[i][j] + dp[i][j - 1])
        }
    }

    return dp[row - 1][col - 1]
};