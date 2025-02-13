/*Example 1*/
var containsDuplicate = function(nums) {
    if(nums.length > 1){
        let isDuplicate
        for(let i = 0; i < nums.length; i ++) {
            for(let y = i+1; y <nums.length; y++) {
                isDuplicate = nums[i] === nums[y]                              

                if(isDuplicate) break;
            }
            if(isDuplicate) break;
        }

        return isDuplicate
    }
};

/*Example 2*/
var containsDuplicate = function(nums) {    
    const seen = new Set()

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true; 
        }
        seen.add(nums[i])
    }

    return false
};

/*test case
Input
nums =
[1,2,3,4,2],
[1,2,3,4],
[1,1,1,3,3,4,3,2,4,2]
*/
