#include <iostream>
#include <vector> // for std::vector
#include <array>  // for std::array
using namespace std;

// Reverse normal array
void reverseArray(int arr[], int size)
{
    for (int i = 0; i < size / 2; i++) // only need to loop through half of the array
    {
        int temp = arr[i];          // store the current element in a temporary variable
        arr[i] = arr[size - 1 - i]; // assign the element from the end of the array to the current position
        arr[size - 1 - i] = temp;   // assign the value from the temporary variable (original element) to the end of the array
    }
}

// Reverse std::array (pass by reference)
void reverseStdArray(array<int, 5> &arr)
{
    int size = arr.size();

    for (int i = 0; i < size / 2; i++)
    {
        int temp = arr[i];
        arr[i] = arr[size - 1 - i];
        arr[size - 1 - i] = temp;
    }
}

// Reverse vector (pass by reference)
void reverseVector(vector<int> &vec)
{
    int size = vec.size();

    for (int i = 0; i < size / 2; i++)
    {
        int temp = vec[i];
        vec[i] = vec[size - 1 - i];
        vec[size - 1 - i] = temp;
    }
}

int main()
{
    int arr[] = {1, 2, 3, 4, 5};            // normal C-style array
    array<int, 5> stdArr = {1, 2, 3, 4, 5}; // std::array with fixed size of 5
    vector<int> vec = {1, 2, 3, 4, 5};      // std::vector with dynamic size (can be changed at runtime)

    int size = sizeof(arr) / sizeof(arr[0]); // calculate the size of the normal array by dividing the total size of the array by the size of a single element

    // Reverse all
    reverseArray(arr, size);
    reverseStdArray(stdArr);
    reverseVector(vec);

    // Print normal array
    cout << "C Array: ";
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    // Print std::array
    cout << "std::array: ";
    for (int i = 0; i < stdArr.size(); i++)
    {
        cout << stdArr[i] << " ";
    }
    cout << endl;

    // Print vector
    cout << "vector: ";
    for (int i = 0; i < vec.size(); i++)
    {
        cout << vec[i] << " ";
    }

    return 0;
}