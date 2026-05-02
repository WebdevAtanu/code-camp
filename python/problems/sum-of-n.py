def sumOfN(n):
    if n == 0:
        return 0
    else:
        return n + sumOfN(n - 1) # calling itself recursively

print(sumOfN(5))