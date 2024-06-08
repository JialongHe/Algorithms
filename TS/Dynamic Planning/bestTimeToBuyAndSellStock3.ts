// 123. Best Time to Buy and Sell Stock III
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/?envType=study-plan-v2&envId=top-interview-150

// First try
function maxProfit5(prices: number[]): number {
    let buy1: number = Number.POSITIVE_INFINITY;
    let buy2: number = Number.POSITIVE_INFINITY;
    let sell1: number = 0;
    let sell2: number = 0;

    for (let i: number = 0; i < prices.length; i++) {
        buy1 = Math.min(buy1, prices[i]);
        sell1 = Math.max(sell1, prices[i] - buy1);
        buy2 = Math.min(buy2, prices[i] - sell1);
        sell2 = Math.max(sell2, prices[i] - buy2);
    }
    
    return sell2;
};