var twoSum = function(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if(map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(nums[i], i);
    }

    return []
};

/*
Case 1
Input
nums =
[3,2,3]
target =
6
Expected
[0,2]

Case 2
nums =
[2,7,11,15]
target =
9
Expected
[0,1]
*/
