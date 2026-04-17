#include <iostream>  // Input-output stream
#include <string>    // String handling
#include <vector>    // Dynamic array
#include <list>      // Doubly linked list
#include <map>       // Key-value pairs
#include <set>       // Unique elements
#include <algorithm> // Algorithms (sort, find, etc.)
#include <stack>     // Stack data structure
#include <queue>     // Queue data structure
#include <memory>    // Smart pointers

using namespace std; // Use the standard namespace to avoid prefixing std:: before every standard library object

/****************************************************
                1. BASIC SYNTAX
****************************************************/
void basicSyntax()
{
    cout << "Hello C++ World!" << endl;

    int a = 10;         // integer
    float b = 5.5;      // float
    char c = 'A';       // character
    bool isTrue = true; // boolean

    cout << a << " " << b << " " << c << " " << isTrue << endl;
}

/****************************************************
                2. CONDITIONS
****************************************************/
void conditions()
{
    int age = 20;

    if (age >= 18)
    {
        cout << "Adult" << endl;
    }
    else
    {
        cout << "Minor" << endl;
    }

    // ternary operator
    string result = (age >= 18) ? "Adult" : "Minor";
    cout << result << endl;
}

/****************************************************
                3. LOOPS
****************************************************/
void loops()
{
    // for loop
    for (int i = 0; i < 5; i++)
    {
        cout << i << " ";
    }
    cout << endl;

    // while loop
    int i = 0;
    while (i < 5)
    {
        cout << i << " ";
        i++;
    }
    cout << endl;

    // do-while loop
    int j = 0;
    do
    {
        cout << j << " ";
        j++;
    } while (j < 5);

    cout << endl;
}

/****************************************************
                4. FUNCTIONS
****************************************************/
int add(int x, int y)
{
    return x + y;
}

void functions()
{
    cout << "Sum: " << add(5, 10) << endl;
}

/****************************************************
                5. ARRAYS
****************************************************/
void arrays()
{
    int arr[5] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

/****************************************************
                6. POINTERS
****************************************************/
void pointers()
{
    int x = 10;
    int *ptr = &x; // pointer storing address of x

    cout << "Value: " << x << endl;
    cout << "Address: " << &x << endl;
    cout << "Pointer: " << ptr << endl;
    cout << "Dereference: " << *ptr << endl;
}

/****************************************************
                7. REFERENCES
****************************************************/
void references()
{
    int x = 10;
    int &ref = x;

    ref = 20;

    cout << "x = " << x << endl;
}

/****************************************************
                8. OOP (CLASS & OBJECT)
****************************************************/
class Student
{
private:
    string name;
    int age;

public:
    // constructor
    Student(string n, int a)
    {
        name = n;
        age = a;
    }

    void display()
    {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

void oopExample()
{
    Student s1("Atanu", 25);
    s1.display();
}

/****************************************************
                9. INHERITANCE
****************************************************/
class Animal
{
public:
    void sound()
    {
        cout << "Animal makes sound" << endl;
    }
};

class Dog : public Animal
{
public:
    void bark()
    {
        cout << "Dog barks" << endl;
    }
};

void inheritanceExample()
{
    Dog d;
    d.sound();
    d.bark();
}

/****************************************************
                10. POLYMORPHISM
****************************************************/
class Base
{
public:
    virtual void show()
    {
        cout << "Base class" << endl;
    }
};

class Derived : public Base
{
public:
    void show() override
    {
        cout << "Derived class" << endl;
    }
};

void polymorphismExample()
{
    Base *b;
    Derived d;
    b = &d;

    b->show(); // runtime polymorphism
}

/****************************************************
                11. STL CONTAINERS
****************************************************/
void stlExample()
{
    // VECTOR
    vector<int> v = {1, 2, 3};
    v.push_back(4);

    for (int x : v)
        cout << x << " ";
    cout << endl;

    // MAP
    map<string, int> mp;
    mp["apple"] = 10;
    mp["banana"] = 20;

    for (auto p : mp)
    {
        cout << p.first << " -> " << p.second << endl;
    }

    // SET
    set<int> s = {3, 1, 2, 2};
    for (int x : s)
        cout << x << " ";
    cout << endl;

    // STACK
    stack<int> st;
    st.push(10);
    st.push(20);
    cout << st.top() << endl;

    // QUEUE
    queue<int> q;
    q.push(1);
    q.push(2);
    cout << q.front() << endl;
}

/****************************************************
                12. LAMBDA FUNCTION
****************************************************/
void lambdaExample()
{
    auto sum = [](int a, int b)
    {
        return a + b;
    };

    cout << "Lambda Sum: " << sum(5, 7) << endl;
}

/****************************************************
                13. SMART POINTERS
****************************************************/
void smartPointerExample()
{
    unique_ptr<int> ptr = make_unique<int>(100);

    cout << "Smart Pointer Value: " << *ptr << endl;
}

/****************************************************
                14. TEMPLATES (GENERIC)
****************************************************/
template <typename T>
T getMax(T a, T b)
{
    return (a > b) ? a : b;
}

void templateExample()
{
    cout << getMax<int>(10, 20) << endl;
    cout << getMax<float>(5.5, 2.3) << endl;
}

/****************************************************
                MAIN FUNCTION
****************************************************/
int main()
{

    basicSyntax();
    conditions();
    loops();
    functions();
    arrays();
    pointers();
    references();

    oopExample();
    inheritanceExample();
    polymorphismExample();

    stlExample();
    lambdaExample();
    smartPointerExample();
    templateExample();

    return 0;
}