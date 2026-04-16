<?php
/************************************************************
 * PHP COMPLETE GUIDE (BASIC TO ADVANCED) - SINGLE FILE
 * Author: Example Learning File
 ************************************************************/

echo "================ BASIC PHP =================\n";

/* ---------------------------
   1. BASIC OUTPUT
---------------------------- */
echo "Hello World\n";
print "This is print statement\n";

/* ---------------------------
   2. VARIABLES & DATA TYPES
---------------------------- */
$name = "Atanu";     // string
$age = 26;           // integer
$price = 99.99;      // float
$isActive = true;    // boolean

echo $name . " is " . $age . " years old\n";

/* ---------------------------
   3. CONSTANTS
---------------------------- */
define("SITE_NAME", "My PHP App");
echo SITE_NAME . "\n";

/* ---------------------------
   4. OPERATORS
---------------------------- */
$a = 10;
$b = 5;

echo "Sum: " . ($a + $b) . "\n";
echo "Difference: " . ($a - $b) . "\n";
echo "Multiply: " . ($a * $b) . "\n";
echo "Division: " . ($a / $b) . "\n";

/* ---------------------------
   5. CONDITIONAL STATEMENTS
---------------------------- */
if ($age >= 18) {
    echo "Adult\n";
} else {
    echo "Minor\n";
}

/* ---------------------------
   6. SWITCH CASE
---------------------------- */
$day = "Monday";

switch ($day) {
    case "Monday":
        echo "Start of week\n";
        break;
    case "Friday":
        echo "Weekend coming\n";
        break;
    default:
        echo "Normal day\n";
}

/* ---------------------------
   7. LOOPS
---------------------------- */

// for loop
for ($i = 1; $i <= 5; $i++) {
    echo "For Loop: $i\n";
}

// while loop
$j = 1;
while ($j <= 3) {
    echo "While Loop: $j\n";
    $j++;
}

// foreach loop
$colors = ["Red", "Green", "Blue"];
foreach ($colors as $color) {
    echo "Color: $color\n";
}

/* ---------------------------
   8. FUNCTIONS
---------------------------- */
function greet($user) {
    return "Hello " . $user . "\n";
}

echo greet("Atanu");

/* ---------------------------
   9. ARRAYS
---------------------------- */

// Indexed array
$fruits = ["Apple", "Banana", "Mango"];

// Associative array
$user = [
    "name" => "Atanu",
    "age" => 26,
    "role" => "Developer"
];

echo $fruits[0] . "\n";
echo $user["name"] . "\n";

/* ---------------------------
   10. SUPERGLOBAL VARIABLES
---------------------------- */
// Example (works in web server)
// echo $_SERVER['PHP_SELF'];

/* =========================================================
   ADVANCED PHP
========================================================= */

echo "\n================ ADVANCED PHP =================\n";

/* ---------------------------
   11. OOP (CLASSES & OBJECTS)
---------------------------- */
class Car {
    public $brand;
    public $model;

    // Constructor
    function __construct($brand, $model) {
        $this->brand = $brand;
        $this->model = $model;
    }

    // Method
    function getInfo() {
        return "Car: $this->brand $this->model\n";
    }
}

$car1 = new Car("Toyota", "Corolla");
echo $car1->getInfo();

/* ---------------------------
   12. INHERITANCE
---------------------------- */
class Vehicle {
    public $type;

    function __construct($type) {
        $this->type = $type;
    }

    function showType() {
        return "Vehicle Type: $this->type\n";
    }
}

class Bike extends Vehicle {
    function message() {
        return "This is a bike\n";
    }
}

$bike = new Bike("Two Wheeler");
echo $bike->showType();
echo $bike->message();

/* ---------------------------
   13. FILE HANDLING
---------------------------- */
$file = "test.txt";

// Write file
file_put_contents($file, "Hello File Handling in PHP\n");

// Read file
$content = file_get_contents($file);
echo $content;

/* ---------------------------
   14. SESSIONS (WEB FEATURE)
---------------------------- */
// session_start();
// $_SESSION["user"] = "Atanu";
// echo $_SESSION["user"];

/* ---------------------------
   15. COOKIES
---------------------------- */
// setcookie("username", "Atanu", time() + 3600);
// echo $_COOKIE["username"];

/* ---------------------------
   16. FORM HANDLING (POST/GET)
/*
   Example HTML:
   <form method="POST">
       <input name="username">
       <button type="submit">Submit</button>
   </form>
*/
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $username = $_POST['username'];
//     echo $username;
// }

/* ---------------------------
   17. DATABASE (PDO - BEST PRACTICE)
---------------------------- */
try {
    $pdo = new PDO("mysql:host=localhost;dbname=testdb", "root", "");

    // set error mode
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Database Connected Successfully\n";

    // Example SELECT query
    // $stmt = $pdo->prepare("SELECT * FROM users");
    // $stmt->execute();
    // $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

/* ---------------------------
   18. SECURITY BASICS
---------------------------- */

// Prevent XSS
$input = "<script>alert('hack')</script>";
$safe = htmlspecialchars($input);
echo $safe . "\n";

// Password hashing
$password = "123456";
$hashed = password_hash($password, PASSWORD_BCRYPT);
echo "Hashed Password: " . $hashed . "\n";

/* ---------------------------
   19. JSON HANDLING
---------------------------- */
$data = ["name" => "Atanu", "role" => "Developer"];

$json = json_encode($data);
echo "JSON: " . $json . "\n";

$decoded = json_decode($json, true);
print_r($decoded);

/* ---------------------------
   20. ERROR HANDLING
---------------------------- */
function divide($a, $b) {
    if ($b == 0) {
        throw new Exception("Division by zero error");
    }
    return $a / $b;
}

try {
    echo divide(10, 2) . "\n";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}

/* ---------------------------
   END
---------------------------- */
echo "\nPHP FULL GUIDE COMPLETED\n";
?>