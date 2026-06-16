function quickSort(arr) {
    if (arr.length <= 1) return arr; // base case: arrays with 0 or 1 element are already sorted

    let pivot = arr[0]; // pivot is the first element of the array
    let left = []; // array to store elements less than the pivot
    let right = []; // array to store elements greater than the pivot

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // add to left array if element is less than pivot
        } else {
            right.push(arr[i]); // add to right array if element is greater than or equal to pivot
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]; // return the sorted array
}
// Example usage:
let arr = [3, 6, 8, 10, 4, 2, 1];
console.log(quickSort(arr)); // Output: [1, 2, 3, 4, 6, 8, 10]