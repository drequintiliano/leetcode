function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    if(s.length === 0) return false;

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    if(sortedS === sortedT) return true;

    return false;
};

/*
Test Case

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/
