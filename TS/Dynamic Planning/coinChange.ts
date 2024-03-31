// 322. Coin Change
// https://leetcode.com/problems/coin-change/description/?envType=study-plan-v2&envId=top-interview-150

// Dynamic Planning
function coinChange(coins: number[], amount: number): number {
    let dp: number[] = [0];
    coins.sort((a, b) => a - b);

    for (let i: number = 1; i <= amount; i++) {
        dp[i] = Infinity;

        for (const coin of coins) {
            if (i - coin < 0) {
                break;
            }
            if (dp[i - coin] !== Infinity) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1,2,5], 11))
console.log(coinChange([2], 3))