// const prices = [7,1,5,3,6,4];
const prices = [7,6,4,3,1];

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let currentMax = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] > min) {
            currentMax = Math.max(prices[i] - min, currentMax);
        }
        console.log(`i=${i},min=${min},prices[i]=${prices[i]},currentMax=${currentMax}`);
    }

    return currentMax;
};

console.log(`maxProfit(prices): ${maxProfit(prices)}`);