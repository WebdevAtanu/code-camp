// 1. VARIABLES
let username: string = "Boss";
let age: number = 26;
let isActive: boolean = true;

console.log(username, age, isActive);

// 2. ARRAYS
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Jane"];

console.log(numbers);
console.log(names);

// 3. TUPLES
let person: [string, number] = ["John", 25];

console.log(person);

// 4. ENUMS
enum Role {
  Admin,
  User,
  Guest,
}

console.log(Role.Admin);

// 5. ANY
let data: any = "Hello";
data = 100;
data = true;

// 6. UNKNOWN
let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// 7. VOID
function printMessage(msg: string): void {
  console.log(msg);
}

printMessage("Hello");

// 8. NEVER
function throwError(message: string): never {
  throw new Error(message);
}

// 9. FUNCTIONS

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));

// 10. OPTIONAL PARAMETERS
function greet(name: string, city?: string) {
  console.log(`Hello ${name} ${city ?? ""}`);
}

greet("Boss");

// 11. DEFAULT PARAMETERS
function multiply(a: number, b: number = 2): number {
  return a * b;
}

console.log(multiply(5));

// 12. REST PARAMETERS
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));

// 13. ARROW FUNCTIONS
const square = (num: number): number => num * num;

console.log(square(5));

// 14. OBJECT TYPES
let employee: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};

// 15. TYPE ALIAS
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Boss",
};

// 16. UNION TYPES
let id: string | number;

id = 101;
id = "EMP101";

// 17. INTERSECTION TYPES
type PersonInfo = {
  name: string;
};

type EmployeeInfo = {
  salary: number;
};

type Staff = PersonInfo & EmployeeInfo;

const staff: Staff = {
  name: "John",
  salary: 50000,
};

// 18. INTERFACES
interface Product {
  id: number;
  title: string;
}

const product: Product = {
  id: 1,
  title: "Laptop",
};

// 19. INTERFACE EXTENDS
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Tommy",
  breed: "Labrador",
};

// 20. CLASSES
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive() {
    console.log(`${this.brand} driving`);
  }
}

const car = new Car("BMW");
car.drive();

// 21. ACCESS MODIFIERS
class BankAccount {
  public owner: string;
  private balance: number;
  protected accountType: string;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
    this.accountType = "Savings";
  }

  getBalance() {
    return this.balance;
  }
}

// 22. INHERITANCE
class Vehicle {
  move() {
    console.log("Moving");
  }
}

class Bike extends Vehicle {
  ride() {
    console.log("Riding");
  }
}

const bike = new Bike();
bike.move();

// 23. ABSTRACT CLASS
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// 24. GENERICS
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(100));

// 25. GENERIC INTERFACE
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const response: ApiResponse<User> = {
  success: true,
  data: user,
};

// 26. TYPEOF
const firstName = "Boss";

type NameType = typeof firstName;

// 27. KEYOF
type UserKeys = keyof User;

// 28. RECORD
type Users = Record<string, User>;

const users: Users = {
  user1: { id: 1, name: "John" },
};

// 29. PICK
type UserPreview = Pick<User, "name">;

// 30. OMIT
type UserWithoutId = Omit<User, "id">;

// 31. PARTIAL
type PartialUser = Partial<User>;

// 32. REQUIRED
type RequiredUser = Required<User>;

// 33. READONLY
type ReadonlyUser = Readonly<User>;

// 34. TYPE GUARDS
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// 35. ASYNC AWAIT
async function fetchData(): Promise<string> {
  return "Data Loaded";
}

fetchData().then(console.log);

// 36. PROMISE
const promise = new Promise<string>((resolve) => {
  resolve("Success");
});

// 37. MAP
const map = new Map<number, string>();

map.set(1, "One");

// 38. SET
const set = new Set<number>();

set.add(1);
set.add(2);

// 39. DESTRUCTURING
const personObj = {
  name: "John",
  city: "London",
};

const { name, city } = personObj;

// 40. SPREAD
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

// 41. OPTIONAL CHAINING
const customer = {
  address: {
    city: "Kolkata",
  },
};

console.log(customer?.address?.city);

// 42. NULLISH COALESCING
const result = null ?? "Default";

console.log(result);

// 43. LITERAL TYPES
let status: "success" | "error";

status = "success";

// 44. FUNCTION OVERLOADING
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

// 45. GENERIC CLASS
class Box<T> {
  constructor(public value: T) {}
}

const stringBox = new Box<string>("Hello");
