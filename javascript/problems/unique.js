// Write a function that takes an array as input and returns a new array containing only unique elements from the input array.
function unique(arr) {
    const uniqueArr = []; // Create an empty array to store unique elements
    for (let i = 0; i < arr.length; i++) { // Loop through each element in the input array
        if (!uniqueArr.includes(arr[i])) { // Check if the current element is not already in the uniqueArr
            uniqueArr.push(arr[i]); // If it's not, add it to the uniqueArr
        }
    }
    return uniqueArr; // Return the array containing only unique elements
}

console.log(unique([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 'tom', 'tom'])); // Output: [1, 2, 3, 4, 'tom']