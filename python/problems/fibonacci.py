def Fibonacci(n):
    if n <= 1:
        return n
    else:
        return(Fibonacci(n-1) + Fibonacci(n-2))

print ("Enter the number of terms: ") # take input from the user
n = int(input()) # converting input to integer
print("Fibonacci sequence:")
for i in range(n):
    print (Fibonacci(i))
    