/*
383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
    const firstInputLength = ransomNote.length;
    const secondInputLength = magazine.length;
    
    if(firstInputLength > secondInputLength) return false;
    if(firstInputLength === 0) return false;        

    const sortedRansomNote = ransomNote.split('').sort().join('');
    const sortedMagazine = magazine.split('').sort().join('');

    let p = 0;

    for(let i = 0; i < secondInputLength; i++) {                        
        if(sortedRansomNote[p] === sortedMagazine[i]) {
            p++;
            if(p === firstInputLength) return true;
        }
    }

    return false;
};



/*
Test Case

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/
