function summaryRanges(nums: number[]): string[] {
    const result = [String(nums[0])];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i-1] + 1) {
            let n = result.length - 1;

            let prefix = result[n][0];

            result[n] = prefix + '->' + String(nums[i])
        } else {
            result.push(String(nums[i]))
        }
    }

    return result;
};

// space O(n) porque apesar de instanciar uma variavel com unico valor, eu retorno um array com varios elementos;
// time O(n) porque eu faço o uso de um laço for.

/*
Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
*/
