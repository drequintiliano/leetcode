/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length) {
        return false;
    }       

    let newString = '';    
    let p = 0;

    for(let i = 0; i < t.length; i++) {
        if(s[p] === t[i]) {
            newString = newString + t[i];
            p++;
        }
    }

    return newString === s;
};


//space seria O(1) porque eu não tenho array, apenas variaveis;
//time seria O(n) porque eu tenho um for que percorre apenas uma array (t);

/*
Input
s =
"abc"
t =
"ahbgdc"
Output
true

Input
s =
"axc"
t =
"ahbgdc"
Output
false
*/
