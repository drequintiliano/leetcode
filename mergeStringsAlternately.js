/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let newArray = '';
    const maxLengthArray = word1.length > word2.length ? word1.length : word2.length 

    for(let i = 0; i < maxLengthArray; i++) {
        newArray = newArray + (word1[i] ?? '') + (word2[i] ?? '');
    }

    return newArray;
};


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
