/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let newString = '';
    const maxLengthArray = word1.length > word2.length ? word1.length : word2.length 

    for(let i = 0; i < maxLengthArray; i++) {
        newString = newString + (word1[i] ?? '') + (word2[i] ?? '');
    }

    return newString;
};

//time and space
//o space é O(1) - porque eu estou guardando uma variavel.
//o time é O(n) - porque eu vou percorrer a maior string de tamanho (n).

/*
Input
word1 =
"abcd"
word2 =
"pq"
Output
"apbqcd"

Input
word1 =
"ab"
word2 =
"pqrs"
Output
"apbqrs"
*/
