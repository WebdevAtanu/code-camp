def isEven(num):
    return num % 2 == 0

def isOdd(num):
    return num % 2 != 0

# Example usage:
number = int(input("Enter a number: "))
if isEven(number):
    print(f"{number} is even.")
else:
    print(f"{number} is odd.")