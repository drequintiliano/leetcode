/*Example 1*/
var isAnagram = function(s, t) {
    let isAnagram = true

    const sortedString = (string) => {
        return string.split('').sort().join('');
    }

    if(s.length === t.length) {
        const newS = sortedString(s);
        const newT = sortedString(t);

        for(let i = 0; i < s.length; i++) {
            if(newS[i] !== newT[i]) {
                isAnagram = false;
                break;
            }
        }
    } else {
        isAnagram = false;
    }

    return isAnagram;
};


/*Example 2*/
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false; 
    }

    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) {
            return false; 
        }
        count[char] -= 1;
    }

    for (let char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }

    return true;
};
