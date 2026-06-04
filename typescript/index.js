var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
// 1. VARIABLES
var username = "Boss";
var age = 26;
var isActive = true;
console.log(username, age, isActive);
// 2. ARRAYS
var numbers = [1, 2, 3];
var names = ["John", "Jane"];
console.log(numbers);
console.log(names);
// 3. TUPLES
var person = ["John", 25];
console.log(person);
// 4. ENUMS
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
console.log(Role.Admin);
// 5. ANY
var data = "Hello";
data = 100;
data = true;
// 6. UNKNOWN
var value = "TypeScript";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
// 7. VOID
function printMessage(msg) {
    console.log(msg);
}
printMessage("Hello");
// 8. NEVER
function throwError(message) {
    throw new Error(message);
}
// 9. FUNCTIONS
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
// 10. OPTIONAL PARAMETERS
function greet(name, city) {
    console.log("Hello ".concat(name, " ").concat(city !== null && city !== void 0 ? city : ""));
}
greet("Boss");
// 11. DEFAULT PARAMETERS
function multiply(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
console.log(multiply(5));
// 12. REST PARAMETERS
function sum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (a, b) { return a + b; }, 0);
}
console.log(sum(1, 2, 3, 4));
// 13. ARROW FUNCTIONS
var square = function (num) { return num * num; };
console.log(square(5));
// 14. OBJECT TYPES
var employee = {
    id: 1,
    name: "John",
};
var user = {
    id: 1,
    name: "Boss",
};
// 16. UNION TYPES
var id;
id = 101;
id = "EMP101";
var staff = {
    name: "John",
    salary: 50000,
};
var product = {
    id: 1,
    title: "Laptop",
};
var dog = {
    name: "Tommy",
    breed: "Labrador",
};
// 20. CLASSES
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.drive = function () {
        console.log("".concat(this.brand, " driving"));
    };
    return Car;
}());
var car = new Car("BMW");
car.drive();
// 21. ACCESS MODIFIERS
var BankAccount = /** @class */ (function () {
    function BankAccount(owner, balance) {
        this.owner = owner;
        this.balance = balance;
        this.accountType = "Savings";
    }
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
// 22. INHERITANCE
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.move = function () {
        console.log("Moving");
    };
    return Vehicle;
}());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bike.prototype.ride = function () {
        console.log("Riding");
    };
    return Bike;
}(Vehicle));
var bike = new Bike();
bike.move();
// 23. ABSTRACT CLASS
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
// 24. GENERICS
function identity(value) {
    return value;
}
console.log(identity("Hello"));
console.log(identity(100));
var response = {
    success: true,
    data: user,
};
// 26. TYPEOF
var firstName = "Boss";
var users = {
    user1: { id: 1, name: "John" },
};
// 34. TYPE GUARDS
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
// 35. ASYNC AWAIT
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, "Data Loaded"];
        });
    });
}
fetchData().then(console.log);
// 36. PROMISE
var promise = new Promise(function (resolve) {
    resolve("Success");
});
// 37. MAP
var map = new Map();
map.set(1, "One");
// 38. SET
var set = new Set();
set.add(1);
set.add(2);
// 39. DESTRUCTURING
var personObj = {
    name: "John",
    city: "London",
};
var name = personObj.name, city = personObj.city;
// 40. SPREAD
var arr1 = [1, 2];
var arr2 = __spreadArray(__spreadArray([], arr1, true), [3, 4], false);
// 41. OPTIONAL CHAINING
var customer = {
    address: {
        city: "Kolkata",
    },
};
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.address) === null || _a === void 0 ? void 0 : _a.city);
// 42. NULLISH COALESCING
var result = null !== null && null !== void 0 ? null : "Default";
console.log(result);
// 43. LITERAL TYPES
var status;
status = "success";
function combine(a, b) {
    return a + b;
}
// 45. GENERIC CLASS
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    return Box;
}());
var stringBox = new Box("Hello");
