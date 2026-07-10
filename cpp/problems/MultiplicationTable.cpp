#include <iostream>
using namespace std;
int main()
{
    cout << "Enter the number to print the multiplication table: "; // ask user to enter number
    int num; // number to print multiplication table
    cin >> num; // take input from user
    for (int i = 1; i <= 10; i++)
    {
        cout << num << " * " << i << " = " << num * i << endl; // print multiplication table
    }
    return 0; //
}