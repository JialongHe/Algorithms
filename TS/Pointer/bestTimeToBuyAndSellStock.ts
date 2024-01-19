// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

// Two Pointer
function maxProfit2(prices: number[]): number {
    let l: number = 0;
    let r: number = 1;
    let profit: number = 0;

    while (r < prices.length) {
        let temp: number = prices[r] - prices[l];
        profit = temp > profit ? temp : profit;
        if (prices[l] < prices[r]) { 
            r++;
        } else if (l < r) {
            l++;
        } else {
            r++;
        }
    }

    return profit;
};

// Improved Two Pointer
function maxProfit(prices: number[]): number {
    let minPrice: number = prices[0];
    let profit: number = 0;

    for (let i: number = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let temp: number = prices[i] - minPrice;
            profit = Math.max(temp, profit);
        }
    }

    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([2,1,4]));