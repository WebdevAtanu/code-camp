#include <iostream>  // for input and output
#include <vector>    // for dynamic arrays
#include <algorithm> // for sorting the array
using namespace std;

int removeDuplicate(vector<int> &arr, int n)
{
    if (n == 0)
        return 0; // if the array is empty return 0

    int j = 0; // index of last unique element

    for (int i = 1; i < n; i++)
    {
        if (arr[i] != arr[j]) // if the current element is not equal to the last unique element
        {
            j++;
            arr[j] = arr[i];
        }
    }

    return j + 1; // new size of array
}

int main()
{
    vector<int> arr = {2, 1, 2, 3, 2, 3, 4, 4, 5}; // initialize the array
    int n = arr.size();                            // get the size of the array

    sort(arr.begin(), arr.end()); // sort the array in ascending order

    int newSize = removeDuplicate(arr, n); // remove duplicates from the array and get the new size

    cout << "Array after removing duplicates: " << endl;
    for (int i = 0; i < newSize; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}