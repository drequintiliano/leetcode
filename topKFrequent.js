var topKFrequent = function(nums, k) {
    const map = new Map();  
   
    for (let i =0; i < nums.length; i++) {          
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
            /*
            aqui o map.set(nums[i] -> aqui eu to setando a chave do meu objeto no map, como as chaves vão ser os proprios valores do array
            (map.get(nums[i]) || 0) + 1 aqui eu seto o valor que eu peguei do map, se for undefined atribuo 0 e incremento +1
            */
    }

     return Array.from(map.entries())
        .sort((a, b) => b[1] - a[1]) //aqui ele ta ordenando de forma descrescente
        .slice(0, k)                 //aqui ele pega os 'k' primeiros, como meu k=2, ele vai pegar os 2 primeiros que mais aparecem
        .map(entry => entry[0]);     //aqui ele retorna só as chaves do map, ou no caso os numeros que mais apareceram
};

/*
Input
nums = [1,1,1,2,2,3,3,3,3]
k =2
Expected
[3,1]
*/
