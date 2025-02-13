var topKFrequent = function(nums, k) {
    const map = new Map();  
   
    for (let i =0; i < nums.length; i++) {          
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

     return Array.from(map.entries())
        .sort((a, b) => b[1] - a[1]) 
        .slice(0, k)                 
        .map(entry => entry[0]); 
};

/*
Input
nums = [1,1,1,2,2,3,3,3,3]
k =2
Expected
[3,1]
*/
