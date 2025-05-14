function maxProfit(prices: number[]): number {
    if(prices.length === 0) return 0;

    let maxProfit = 0;
    let currentElement = prices[0];    

    for(let i = 1; i < prices.length; i++) {                
        if(prices[i] < currentElement) {
            currentElement = prices[i];
        }        

        const currentProfit = prices[i] - currentElement;

        if(currentProfit > maxProfit) {
           maxProfit = currentProfit;
        }
    }    

    return maxProfit;
};

//space O(1) porque tenho apenas duas variaveis;
//time O(n) porque eu estou fazendo um laço for;

/*
xample 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/
