function anagram(str1, str2) {
    // Remove spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // Check if the lengths are equal
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Create frequency maps for both strings
    const freqMap1 = {};
    const freqMap2 = {};

    // Count the frequency of each character in both strings
    // example: for "listen", freqMap1 will be { l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }
    for (let char of cleanStr1) {
        freqMap1[char] = (freqMap1[char] || 0) + 1;
    }

    for (let char of cleanStr2) {
        freqMap2[char] = (freqMap2[char] || 0) + 1; // Increment frequency for each character in str2
    }

    // Compare frequency maps
    for (let char in freqMap1) {
        if (freqMap1[char] !== freqMap2[char]) {
            return false;
        }
    }

    return true;
}

// Example usage:
console.log(anagram("listen", "silent")); // true
console.log(anagram("hello", "world")); // false