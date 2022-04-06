var maxProfit = function(prices) {
    const left = Array(prices.length).fill(0)
    const right = Array(prices.length).fill(0)
    let [leftMin, rightMax]  = [prices[0], prices[prices.length - 1]];
    let res = 0
    for(let i = 1; i < prices.length; i++){
        leftMin = Math.min(prices[i], leftMin)
        left[i] = Math.max(left[i - 1], prices[i] - leftMin)
    }
    for(let i = prices.length - 2; i >= 0; i--){
        rightMax = Math.max(prices[i], rightMax)
        right[i] = Math.max(right[i + 1], rightMax - prices[i])
    }
    for(let i = 0; i < prices.length; i++){
        res = Math.max(res, right[i] + left[i])
    }
    return res
};
