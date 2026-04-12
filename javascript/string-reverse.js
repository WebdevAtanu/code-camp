function stringReverse(str) {
    const stringArr = str.split(''); // Convert the string to an array of characters
    let i; // Initialize the loop variable
    for (i = 0; i < stringArr.length / 2; i++) { // Loop until the middle of the array
        const temp = stringArr[i]; // Store the current character in a temporary variable
        stringArr[i] = stringArr[stringArr.length - 1 - i]; // Replace the current character with the corresponding character from the end
        stringArr[stringArr.length - 1 - i] = temp; // Replace the corresponding character from the end with the temporary variable
    }
    return stringArr.join(''); // Join the array back into a string and return it
}

// Example usage:
const input = "Hello, World!";
const reversed = stringReverse(input);
console.log(reversed); // Output: "!dlroW ,olleH"