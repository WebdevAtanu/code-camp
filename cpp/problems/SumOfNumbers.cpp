#include <iostream>
using namespace std;

int SumOfNumbers(int n)
{
    int sum = 0;
    for (int i = 1; i <= n; ++i)
    {
        sum += i;
    }
    return sum;
}

int main()
{
    int number;
    cout << "Enter a number: ";
    cin >> number;
    int result = SumOfNumbers(number);
    cout << "The sum of numbers from 1 to " << number << " is: " << result << endl;
    return 0;
}