function squareRoot(num) {
    if (num < 0) {
        return 0; // Return 0 for negative numbers
    }

    return Math.floor(Math.sqrt(num)); // Return the square root of the number
}

console.log(squareRoot(8)); // Output: 2