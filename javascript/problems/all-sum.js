import readline from 'readline';

// readline module is used to get user input from the terminal
const rl = readline.createInterface({
    input: process.stdin, // readable stream from stdin input 
    output: process.stdout // writable stream to stdout
})

// rl.question() method is used to get user input
rl.question("Enter numbers in comma separated: ", (numbers) => {
    numbers = numbers.split(','); // split the input string into an array
    const result = sumAll(numbers); // call the sumAll function
    console.log(result); // print the result
    rl.close();
});

function sumAll(numbers) {
    let sum = 0; // initialize the sum variable
    numbers.forEach(element => {
        sum += parseInt(element); // convert each element to an integer and add it to the sum
    });

    return sum; // return the sum
}
