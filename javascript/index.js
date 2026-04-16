/************************************************************
 * JAVASCRIPT COMPLETE GUIDE (BASIC → ADVANCED)
 * Author: Learning File
 * Description: All core JS concepts in one file with comments
 ************************************************************/


/* =========================
   1. VARIABLES & DATA TYPES
========================= */

// var (old way - avoid in modern JS)
var oldVar = "I am var";

// let (block scoped, recommended)
let name = "Atanu";

// const (constant value)
const country = "India";

// Data Types
let number = 10;            // Number
let text = "Hello JS";      // String
let isActive = true;        // Boolean
let empty = null;           // Null
let notDefined;             // Undefined
let bigIntValue = 123n;     // BigInt
let symbolValue = Symbol(); // Symbol

console.log(name, country);


/* =========================
   2. OPERATORS
========================= */

let a = 10, b = 5;

console.log(a + b); // Arithmetic
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log(a > b); // Comparison
console.log(a === b);

console.log(true && false); // Logical
console.log(true || false);


/* =========================
   3. CONDITIONAL STATEMENTS
========================= */

let age = 18;

if (age > 18) {
    console.log("Adult");
} else if (age === 18) {
    console.log("Just Adult");
} else {
    console.log("Minor");
}

// Ternary operator
let result = age >= 18 ? "Eligible" : "Not Eligible";


/* =========================
   4. LOOPS
========================= */

// for loop
for (let i = 0; i < 5; i++) {
    console.log("For loop:", i);
}

// while loop
let i = 0;
while (i < 3) {
    console.log("While loop:", i);
    i++;
}

// do-while loop
let j = 0;
do {
    console.log("Do While:", j);
    j++;
} while (j < 2);

// for-of (arrays)
let arr = [1, 2, 3];
for (let val of arr) {
    console.log(val);
}

// for-in (objects)
let user = { name: "John", age: 25 };
for (let key in user) {
    console.log(key, user[key]);
}


/* =========================
   5. FUNCTIONS
========================= */

// Function declaration
function greet(name) {
    return "Hello " + name;
}

// Function expression
const add = function (x, y) {
    return x + y;
};

// Arrow function
const multiply = (x, y) => x * y;

console.log(greet("JS"));
console.log(add(2, 3));
console.log(multiply(2, 4));


/* =========================
   6. ARRAYS (IMPORTANT)
========================= */

let numbers = [1, 2, 3, 4, 5];

// push / pop
numbers.push(6);
numbers.pop();

// map
let doubled = numbers.map(n => n * 2);

// filter
let filtered = numbers.filter(n => n > 2);

// reduce
let sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(doubled, filtered, sum);


/* =========================
   7. OBJECTS
========================= */

let person = {
    name: "Atanu",
    age: 26,
    greet: function () {
        return "Hi " + this.name;
    }
};

console.log(person.greet());

// Object destructuring
let { name: personName, age: personAge } = person;


/* =========================
   8. ES6 FEATURES
========================= */

// Template literals
let msg = `My name is ${name}`;

// Spread operator
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];

// Rest operator
function sumAll(...nums) {
    return nums.reduce((a, b) => a + b);
}


/* =========================
   9. DOM MANIPULATION (Browser Only)
========================= */

// Uncomment in browser environment
/*
document.getElementById("title").innerText = "Updated Title";

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    alert("Button clicked!");
});
*/


/* =========================
   10. ASYNCHRONOUS JS
========================= */

// Callback
function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

fetchData(data => console.log(data));

// Promise
let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) resolve("Promise resolved");
    else reject("Error");
});

myPromise.then(res => console.log(res))
         .catch(err => console.log(err));

// Async / Await
async function getData() {
    let response = await myPromise;
    console.log(response);
}

getData();


/* =========================
   11. FETCH API (HTTP CALLS)
========================= */

// Browser only
/*
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
*/


/* =========================
   12. ERROR HANDLING
========================= */

try {
    let x = undefinedVariable;
} catch (error) {
    console.log("Error caught:", error.message);
} finally {
    console.log("Always runs");
}


/* =========================
   13. CLASSES (OOP)
========================= */

class Car {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        return `${this.brand} started`;
    }
}

let myCar = new Car("Toyota");
console.log(myCar.start());


/* =========================
   14. LOCAL STORAGE (Browser)
========================= */

/*
localStorage.setItem("name", "Atanu");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
*/


/* =========================
   15. ADVANCED: CLOSURES
========================= */

function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}

let closureExample = outerFunction(10);
console.log(closureExample(5)); // 15


/* =========================
   16. ADVANCED: CALLBACK HELL EXAMPLE
========================= */

setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 500);
    }, 500);
}, 500);


/* =========================
   17. ADVANCED: EVENT LOOP CONCEPT
========================= */

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output order:
// Start -> End -> Promise -> Timeout


/************************************************************
 * END OF JAVASCRIPT COMPLETE GUIDE
 ************************************************************/