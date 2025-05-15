// 771. Jewels and Stones

function numJewelsInStones(jewels: string, stones: string): number {
    if (jewels.length === 0 || stones.length === 0) return 0;
    
    const mySet = new Set(jewels);    
    let output = 0;

    for(let i = 0; i < stones.length; i++) {
        if(mySet.has(stones[i])) {
            output++;
        }
    }

    return output;
};

/*
Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
*/
