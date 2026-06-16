function stringReverse(str: string): string {
  const splittedString = str.split(""); // Convert the string to an array of characters
  for (let i = 0; i < splittedString.length / 2; i++) { // Loop until the middle of the array

    const temp = splittedString[i]; // Store the current character in a temporary variable
    splittedString[i] = splittedString[splittedString.length - 1 - i]; // Swap the current character with the corresponding character from the end
    splittedString[splittedString.length - 1 - i] = temp; // Swap the corresponding character from the end with the temporary variable
  
}
  
  return splittedString.join(""); // Join the array of characters back into a string and return it
}

const inputString = "Hello, World!";
const reversedString = stringReverse(inputString); // Call the stringReverse function with the input string
console.log(reversedString); // Output: !dlroW ,olleH
