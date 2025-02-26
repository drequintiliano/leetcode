var groupAnagrams = function(strs) {
    const map = new Map();
    
    for (let str of strs) {
        const count = {};         

        const sortedString = str.split('').sort().join('');
        if(map.has(sortedString)) {
            map.get(sortedString).push(str)
        } else {
            map.set(sortedString, [str]);
        }     
    }

    return Array.from(map.values());
};


/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Como funciona:
O Map em JavaScript é uma coleção de pares chave-valor.
Quando você faz map.has(chave), o JavaScript só verifica se aquela chave específica existe no Map.
map.get(chave) Ele retorna o valor associado a uma chave específica dentro do Map.

Exemplo:

const map = new Map();
map.set('aet', ['eat', 'tea', 'ate']);
map.set('ant', ['tan', 'nat']);
map.set('abt', ['bat']);
Nesse caso, as chaves são: "aet", "ant", e "abt".

map.has('aet') → true //(porque a chave "aet" existe)
map.has('bat') → false //(porque "bat" não é uma chave, é um valor dentro do array)
map.has('ant') → true //(chave "ant" existe)
map.has('tan') → false //("tan" é um valor no array, não uma chave)
*/

