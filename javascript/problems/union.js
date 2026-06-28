function union(arr1, arr2) {
    const set1 = new Set(arr1); // Create a Set from the first array to remove duplicates
    const set2 = new Set(arr2); // Create a Set from the second array to remove duplicates
    const unionSet = new Set([...set1, ...set2]); // Create a new Set that combines both sets, effectively performing the union operation
    return Array.from(unionSet); // Convert the Set back to an array and return it
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const result = union(arr1, arr2); // Call the union function with two arrays
console.log(result); // Output: [1, 2, 3, 4]