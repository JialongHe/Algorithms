// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

// Initial version
function maxProfit3(prices: number[]): number {
    let profit: number = 0;
    let minPrice: number = prices[0];

    for (let i: number = 0; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        let currentProfit: number = prices[i] - minPrice;
        
        // sell
        if (currentProfit > 0) {
            profit += currentProfit;
            // update minPrice after sell day
            minPrice = prices[i];
        }
    }
    
    return profit;
};

// Improved Version
function maxProfit4(prices: number[]): number {
    let profit: number = 0;
    
    for (let i: number = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    
    return profit;
};

console.log(maxProfit4([7,1,5,3,6,4]));
console.log(maxProfit4([1,2,3,4,5]));
console.log(maxProfit4([7,6,4,3,1]));