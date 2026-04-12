// ================= REFERENCE EQUALITY =================
console.log([1] == [1]) // false → arrays compared by reference, not value
console.log({} == {}) // false → objects are different memory references


// ================= NaN & TYPEOF EDGE CASES =================
console.log(NaN == NaN) // false → NaN is never equal to itself
console.log(typeof NaN) // number → JS bug: NaN is considered a number
console.log(typeof null) // object → legacy bug in JS


// ================= BOOLEAN COERCION / TRUTHINESS =================
console.log(!!"text") // true → non-empty string is truthy
console.log(!!"") // false → empty string is falsy
console.log(!!NaN) // false → NaN is falsy


// ================= NULL vs UNDEFINED =================
console.log(null == undefined) // true → special loose equality rule
console.log(null === undefined) // false → strict checks type
console.log(null == 0) // false → null only equals undefined
console.log(null >= 0) // true → null converted to 0 in comparison


// ================= UNDEFINED COMPARISONS =================
console.log(undefined == 0) // false → undefined not coerced to number
console.log(undefined > 0) // false → undefined becomes NaN
console.log(undefined >= 0) // false → NaN comparison is false
console.log(typeof undefined) // undefined → its own type


// ================= STRING & NUMBER OPERATIONS =================
console.log("5" - 3) // 2 → string converted to number
console.log("5" + 3) // "53" → + triggers string concatenation
console.log("5" * "2") // 10 → both strings converted to numbers
console.log("5" / "2") // 2.5 → numeric division
console.log("5" - "2") // 3 → subtraction forces number conversion
console.log("5" + "2") // "52" → string concatenation


// ================= UNARY COERCION =================
console.log(+"") // 0 → empty string becomes 0
console.log(+"abc") // NaN → invalid number conversion
console.log(1 + +"2" + "2") // "32" → number + number then string concat
console.log(1 + -"1" + "2") // "02" → 1-1=0 then string concat


// ================= BOOLEAN ARITHMETIC =================
console.log(true + true) // 2 → true = 1
console.log(true + false) // 1 → false = 0
console.log(false == "0") // true → both converted to 0
console.log(false === "0") // false → different types


// ================= LOOSE vs STRICT =================
console.log(0 == false) // true → both become 0
console.log(0 === false) // false → type mismatch
console.log("" == 0) // true → empty string becomes 0
console.log("" === 0) // false → strict comparison
console.log([] == false) // true → [] → "" → 0


// ================= ARRAY / OBJECT COERCION =================
console.log([] + []) // "" → arrays convert to empty string
console.log([] + {}) // "[object Object]" → object stringified
console.log({} + []) // 0 → treated as block + unary +


// ================= RELATIONAL GOTCHAS =================
console.log(1 < 2 < 3) // true → true → 1, then 1<3
console.log(3 > 2 > 1) // false → true → 1, then 1>1


// ================= STRING TRICK =================
console.log("b" + "a" + +"a" + "a") // "baNaNa" → +"a" is NaN


// ================= TYPE / INSTANCE =================
console.log(typeof function () { }) // function → special callable object
console.log(typeof []) // object → arrays are objects
console.log([] instanceof Array) // true → inherits from Array
console.log([] instanceof Object) // true → Array extends Object


// ================= HOISTING =================
let a = 10;
(function () {
    console.log(a); // undefined → var hoisted inside function
    var a = 20;
})();

let x = 5;
function test() {
    console.log(x); // 5 → lexical scope access
}
test();

console.log(typeof myVar); // undefined → var hoisted
var myVar = 10;

// console.log(typeof myLet); // ReferenceError → TDZ
let myLet = 10;


// ================= PARSE / NaN =================
console.log(parseInt("10px")) // 10 → parses until invalid char
console.log(parseInt("px10")) // NaN → starts with invalid char
console.log(isNaN("hello")) // true → coerces then checks
console.log(Number.isNaN("hello")) // false → strict check


// ================= ARRAY EQUALITY EDGE =================
console.log([] == ![]) // true → []→""→0 and ![]→false→0
console.log([] == 0) // true → []→""→0
console.log([0] == 0) // true → [0]→"0"→0
console.log([1, 2] == "1,2") // true → array to string
console.log([1] == true) // true → [1]→"1"→1
console.log([] == "") // true → []→""


// ================= REFERENCE vs CLONE =================
let obj = { a: 1 };
let copy = obj;
copy.a = 2;
console.log(obj.a) // 2 → same reference

let obj2 = { a: 1 };
let copy2 = { ...obj2 };
copy2.a = 2;
console.log(obj2.a) // 1 → shallow clone

const arr = [1, 2];
const arr2 = arr;
arr2.push(3);
console.log(arr) // [1,2,3] → shared reference

const arr3 = [1, 2];
const arr4 = [...arr3];
arr4.push(3);
console.log(arr3) // [1,2] → cloned array


// ================= COMMA OPERATOR =================
console.log(typeof (1, 2, 3)) // number → last value considered
console.log((1, 2, 3)) // 3 → returns last expression


// ================= MATH DEFAULTS =================
console.log(Math.max()) // -Infinity → no args default
console.log(Math.min()) // Infinity → no args default


// ================= SPREAD =================
console.log([..."hello"]) // ['h','e','l','l','o'] → string spread
console.log([...new Set([1, 1, 2])]) // [1,2] → remove duplicates


// ================= FINAL MIX =================
console.log("5" == 5) // true → coercion
console.log("5" === 5) // false → strict mismatch
console.log(!![]) // true → arrays are truthy
console.log(!!{}) // true → objects are truthy
console.log(!!0) // false → 0 is falsy
console.log(!!-1) // true → non-zero truthy
console.log(typeof Infinity) // number → special numeric value
console.log(Infinity > 999999) // true → larger than any number
console.log(0.1 + 0.2 === 0.3) // false → floating precision issue
console.log((0.1 + 0.2).toFixed(1) == 0.3) // true → rounded
console.log(" " == 0) // true → space → 0
console.log(" " === 0) // false → strict mismatch
console.log([] == null) // false → no direct coercion
console.log(undefined == null) // true → special case
console.log(undefined === null) // false → strict mismatch
console.log(typeof Symbol()) // symbol → unique primitive
console.log(Symbol() == Symbol()) // false → unique values
console.log(Symbol() === Symbol()) // false → always unique
console.log(typeof BigInt(10)) // bigint → large integer type
console.log(10n == 10) // true → loose equality
console.log(10n === 10) // false → different types
console.log("hello" - 1) // NaN → invalid numeric operation
console.log(typeof 0.0000001) // number → still a number despite small magnitude
console.log(0.1 + 0.2) // 0.30000000000000004 → floating-point precision
console.log({ ...null }) // {} → null becomes empty object in object spread


// ================= EVENT LOOP =================
console.log("start")
setTimeout(() => console.log("timeout"), 0)
Promise.resolve().then(() => console.log("promise"))
console.log("end")
// start, end, promise, timeout → microtasks run before macrotasks

setTimeout(() => console.log(1), 0)
setTimeout(() => console.log(2), 0)
// 1 then 2 → FIFO queue order

Promise.resolve().then(() => console.log(1))
Promise.resolve().then(() => console.log(2))
// 1 then 2 → microtasks preserve order


// ================= FUNCTION EDGE =================
function f() { return }
console.log(f()) // undefined → no return value

function f2() {
    return
    5
}
console.log(f2()) // undefined → ASI inserts semicolon

console.log(typeof function () { }.prototype) // object → functions have prototype object


// ================= ARGUMENTS OBJECT =================
function test(a) {
    arguments[0] = 10
    console.log(a)
}
test(5) // 10 → arguments linked with params (non-strict)

function test2(a) {
    a = 20
    console.log(arguments[0])
}
test2(5) // 20 → bidirectional link


// ================= CALL / APPLY / BIND =================
function greet() { return this.name }
const user = { name: "A" }

console.log(greet.call(user)) // A → call sets this
console.log(greet.apply(user)) // A → apply same as call

const bound = greet.bind(user)
console.log(bound()) // A → bind returns new function


// ================= OBJECT KEYS =================
const objK = { 1: "a", 2: "b" }
console.log(Object.keys(objK)) // ["1","2"] → keys converted to strings

const objK2 = { true: "yes" }
console.log(objK2["true"]) // "yes" → boolean key becomes string


// ================= ARRAY LENGTH =================
const arrL = [1, 2, 3]
arrL.length = 1
console.log(arrL) // [1] → truncates array

const arrL2 = [1, 2]
arrL2.length = 5
console.log(arrL2) // [1,2,empty×3] → expands with holes


// ================= DELETE =================
const arrD = [1, 2, 3]
delete arrD[1]
console.log(arrD.length) // 3 → delete keeps length

const objD = { a: 1 }
console.log(delete objD.a) // true → property removed


// ================= TYPE CONVERSION =================
console.log(+"0xF") // 15 → hex string to number
console.log(parseInt("08")) // 8 → modern JS avoids octal issue
console.log(parseFloat("10.5px")) // 10.5 → parses valid float


// ================= JSON =================
console.log(JSON.stringify({ a: undefined })) // "{}" → undefined ignored
console.log(JSON.stringify([undefined])) // "[null]" → becomes null in array
console.log(JSON.parse("null")) // null → valid JSON parse


// ================= DATE =================
console.log(new Date("invalid")) // Invalid Date → parsing failed
console.log(new Date().getTime()) // timestamp → ms since epoch


// ================= SYMBOL =================
const s1 = Symbol("a")
const s2 = Symbol("a")
console.log(s1 === s2) // false → always unique

const objSym = { [Symbol("id")]: 1 }
console.log(Object.keys(objSym)) // [] → symbols not enumerable


// ================= CLASS =================
class A {
    static x() { return 1 }
}
console.log(A.x()) // 1 → static method

class B {
    x() { return 2 }
}
console.log(new B().x()) // 2 → instance method


// ================= PROTOTYPE =================
function P() { }
P.prototype.x = 1
const objP = new P()
console.log(objP.hasOwnProperty("x")) // false → inherited from prototype


// ================= OBJECT METHODS =================
const objM = { a: 1 }
console.log(Object.entries(objM)) // [["a",1]]
console.log(Object.values(objM)) // [1]


// ================= STRING =================
console.log("abc".charAt(1)) // "b"
console.log("abc"[1]) // "b"


// ================= NUMBER =================
console.log((123).toString()) // "123"
console.log(1 / 0) // Infinity → division by zero
console.log(-1 / 0) // -Infinity


// ================= OBJECT COMPARISON =================
const same = { a: 1 }
console.log(same === same) // true → same reference


// ================= SPREAD =================
const o1 = { a: 1 }
const o2 = { b: 2 }
console.log({ ...o1, ...o2 }) // {a:1,b:2} → merged

console.log({ ...{ a: 1 }, a: 2 }) // {a:2} → last value overrides


// ================= REST =================
function sum(...a) { return a }
console.log(sum(1, 2, 3)) // [1,2,3] → rest collects args


// ================= OPTIONAL CHAIN =================
const oOpt = null
console.log(oOpt?.a) // undefined → safe access


// ================= NULLISH =================
console.log("" ?? "default") // "" → only null/undefined trigger
console.log(null || "default") // "default" → falsy check


// ================= BITWISE =================
console.log(5 & 1) // 1 → AND
console.log(5 | 1) // 5 → OR


// ================= FLOAT PRECISION =================
console.log(0.3 - 0.2 === 0.1) // false → floating precision issue


// ================= MAP =================
const m = new Map()
m.set({}, 1)
console.log(m.get({})) // undefined → different reference key


// ================= SET =================
const s = new Set([NaN, NaN])
console.log(s.size) // 1 → NaN treated same


// ================= FUNCTION NAME =================
function testFn() { }
console.log(testFn.name) // "testFn"


// ================= STRICT MODE =================
"use strict"
// x = 10 // ReferenceError → strict mode prevents implicit globals


// ================= FREEZE =================
const objF = { a: { b: 1 } }
Object.freeze(objF)
objF.a.b = 2
console.log(objF.a.b) // 2 → shallow freeze only


// ================= ARRAY FILL =================
console.log(Array(3).fill(1)) // [1,1,1]
console.log(Array(3)) // [empty × 3]


// ================= ARRAY METHODS =================
console.log([1, 2, 3].findIndex(x => x > 1)) // 1 → first match index
console.log([1, [2, [3]]].flat(2)) // [1,2,3] → flatten depth


// ================= STRING METHODS =================
console.log("5".padStart(3, "0")) // "005"
console.log("  hi  ".trim()) // "hi"
console.log("a".repeat(3)) // "aaa"


// ================= COMPARISON EDGE =================
console.log([] == ![]) // true → coercion chain
console.log({} == false) // false → object not equal to false
console.log([] == true) // false → []→0 vs true→1
console.log([2] == true) // false → 2 != 1


// ================= TYPE SUMMARY =================
console.log(typeof []) // object
console.log(typeof null) // object
console.log(typeof NaN) // number
console.log(typeof undefined) // undefined
console.log(typeof (() => { })) // function
console.log(typeof class { }) // function


// ================= BOOLEAN EDGE =================
console.log(!!"false") // true → string truthy
console.log(Boolean("0")) // true
console.log(Boolean(0)) // false
console.log(Boolean(" ")) // true
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean([])) // true
console.log(Boolean({})) // true
console.log(Boolean(function () { })) // true


// ================= ADVANCED COMPARISON =================
console.log("2" > "10") // true → lexicographic comparison
console.log("2" > 10) // false → numeric comparison
console.log([10] > [2]) // false → string compare
console.log([10] > 2) // true → numeric conversion

console.log(null == false) // false
console.log(null == "") // false
console.log(null == []) // false
console.log(null == {}) // false

console.log(undefined == false) // false
console.log(undefined == "") // false
console.log(undefined == []) // false
console.log(undefined == {}) // false


// ================= FINAL EDGE =================
console.log("true" == true) // false → "true" → NaN
console.log("1" == true) // true → both become 1
console.log("0" == false) // true → both become 0
console.log("" == false) // true → ""→0
console.log(" " == false) // true → space → 0
console.log([] == false) // true → []→0
console.log([0] == false) // true → 0==0
console.log([1] == false) // false → 1!=0


