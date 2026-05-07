# =========================================================
# 1. BASIC SYNTAX
# =========================================================

print("Hello World")  # Output

# Variables (dynamic typing)
name = "Atanu"
age = 25
height = 5.9
is_developer = True

print(name, age, height, is_developer)

# =========================================================
# 2. DATA TYPES
# =========================================================

a = 10              # int
b = 10.5            # float
c = "Python"        # string
d = True            # boolean
e = None            # NoneType

print(type(a), type(b), type(c))

# =========================================================
# 3. TYPE CONVERSION
# =========================================================

x = int("100")
y = str(100)
z = float("10.5")

print(x, y, z)

# =========================================================
# 4. OPERATORS
# =========================================================

a, b = 10, 3

print(a + b)   # addition
print(a - b)   # subtraction
print(a * b)   # multiplication
print(a / b)   # division
print(a // b)  # floor division
print(a % b)   # modulus
print(a ** b)  # power

# =========================================================
# 5. CONDITIONAL STATEMENTS
# =========================================================

age = 18

if age < 18:
    print("Minor")
elif age == 18:
    print("Just Adult")
else:
    print("Adult")

# =========================================================
# 6. LOOPS
# =========================================================

# for loop
for i in range(5):
    print("For loop:", i)

# while loop
i = 0
while i < 5:
    print("While loop:", i)
    i += 1

# =========================================================
# 7. DATA STRUCTURES
# =========================================================

# LIST (mutable)
fruits = ["apple", "banana", "mango"]
fruits.append("orange")
print(fruits)

# TUPLE (immutable)
colors = ("red", "green", "blue")
print(colors)

# SET (unique values)
nums = {1, 2, 3, 3, 2}
print(nums)

# DICTIONARY (key-value)
user = {
    "name": "Atanu",
    "age": 25
}
print(user["name"])

# =========================================================
# 8. FUNCTIONS
# =========================================================

def greet(name):
    return f"Hello {name}"

print(greet("Python"))

# default parameter
def add(a, b=10):
    return a + b

print(add(5))

# =========================================================
# 9. LAMBDA FUNCTIONS
# =========================================================

square = lambda x: x * x
print(square(5))

# =========================================================
# 10. LIST COMPREHENSION
# =========================================================

squares = [x*x for x in range(5)]
print(squares)

# =========================================================
# 11. EXCEPTION HANDLING
# =========================================================

try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
finally:
    print("Always runs")

# =========================================================
# 12. FILE HANDLING
# =========================================================

# write
with open("test.txt", "w") as f:
    f.write("Hello File")

# read
with open("test.txt", "r") as f:
    content = f.read()
    print(content)

# =========================================================
# 13. OOP (OBJECT ORIENTED PROGRAMMING)
# =========================================================

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def show(self):
        print(self.name, self.age)

p1 = Person("Atanu", 25)
p1.show()

# inheritance
class Employee(Person):
    def __init__(self, name, age, salary):
        super().__init__(name, age)
        self.salary = salary

    def display(self):
        print(self.name, self.age, self.salary)

emp = Employee("Dev", 30, 50000)
emp.display()

# =========================================================
# 14. MODULES
# =========================================================

import math

print(math.sqrt(16))
print(math.factorial(5))

# =========================================================
# 15. ADVANCED: ITERATORS
# =========================================================

nums = [1, 2, 3]
it = iter(nums)

print(next(it))
print(next(it))

# =========================================================
# 16. GENERATORS
# =========================================================

def my_gen():
    yield 1
    yield 2
    yield 3

for val in my_gen():
    print(val)

# =========================================================
# 17. DECORATORS
# =========================================================

def decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@decorator
def hello():
    print("Hello World")

hello()

# =========================================================
# 18. LAMBDA + MAP / FILTER / REDUCE
# =========================================================

nums = [1, 2, 3, 4]

print(list(map(lambda x: x*2, nums)))
print(list(filter(lambda x: x%2==0, nums)))

from functools import reduce
print(reduce(lambda x, y: x+y, nums))

# =========================================================
# 19. ADVANCED OOP: PROPERTY
# =========================================================

class Product:
    def __init__(self, price):
        self._price = price

    @property
    def price(self):
        return self._price

p = Product(100)
print(p.price)

# =========================================================
# 20. MULTITHREADING (BASIC)
# =========================================================

import threading

def print_numbers():
    for i in range(3):
        print(i)

t = threading.Thread(target=print_numbers)
t.start()
t.join()