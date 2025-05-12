/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let min = nums[0];        

    for(let i=1; i<nums.length; i++) {
        if(Math.abs(nums[i]) === Math.abs(min)){
            min = nums[i] > min ? nums[i] : min;

        } else if (Math.abs(nums[i]) < Math.abs(min)) {
            min = nums[i];
        }
    }
    
    return min;
};

/*
test cases

nums = [-4,-2,1,4,8]
nums = [2,-1,1]
nums = [-100000,-100000]
nums = [2,1,1,-1,100000]

*/
