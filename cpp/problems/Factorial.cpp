#include <iostream>
using namespace std;

int factorial(int n) // Recursive function to calculate factorial
{
    if (n == 0 || n == 1)
    {
        return 1; // Base case: factorial of 0 or 1 is 1
    }
    else
    {
        return n * factorial(n - 1); // Recursive case to calculate factorial
    }
}

int main()
{
    int num;
    cout << "Enter a number: ";
    cin >> num;
    cout << "Factorial of " << num << " is " << factorial(num) << endl; 
    return 0; // Return 0 indicates that the program ended successfully
}