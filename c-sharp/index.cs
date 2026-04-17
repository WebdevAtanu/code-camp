#nullable enable

using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Threading.Tasks;
using System.Threading;

static class DemoHelper
{
    public static void Title(string t)
    {
        Console.WriteLine();
        Console.WriteLine(new string('=', 60));
        Console.WriteLine(t);
        Console.WriteLine(new string('-', 60));
    }
}

#region 1 Basics
class Basics
{
    public static void Run()
    {
        DemoHelper.Title("1. Basics");
        Console.WriteLine("Hello, World!");
    }
}
#endregion

#region 2 Variables & Types
class VariablesDemo
{
    public static void Run()
    {
        DemoHelper.Title("2. Variables & Types");

        int age = 26;
        double price = 99.9;
        string name = "Atanu";
        bool isActive = true;
        char grade = 'A';

        var inferred = "var example";
        string? nullable = null;

        dynamic dyn = 10;
        dyn = "dynamic string";

        Console.WriteLine($"{name}, {age}, {price}, {isActive}, {grade}");
        Console.WriteLine($"var: {inferred}, nullable null: {nullable is null}, dynamic: {dyn}");
    }
}
#endregion

#region 3 Operators
class OperatorsDemo
{
    public static void Run()
    {
        DemoHelper.Title("3. Operators");

        int a = 10, b = 3;

        Console.WriteLine(a + b);
        Console.WriteLine(a - b);
        Console.WriteLine(a * b);
        Console.WriteLine(a / b);
        Console.WriteLine(a % b);
    }
}
#endregion

#region 4 Control Statements
class ControlDemo
{
    public static void Run()
    {
        DemoHelper.Title("4. Control Statements");

        int x = 5;

        if (x > 0)
            Console.WriteLine("Positive");
        else
            Console.WriteLine("Non-positive");

        for (int i = 0; i < 3; i++)
            Console.WriteLine(i);

        int[] arr = { 1, 2, 3 };

        foreach (int n in arr)
            Console.WriteLine(n);

        int count = 0;
        while (count < 2)
            Console.WriteLine(count++);
    }
}
#endregion

#region 5 Methods
class MethodsDemo
{
    public static int Add(params int[] nums) => nums.Sum();

    public static void GetCoordinates(out int x, out int y)
    {
        x = 10;
        y = 20;
    }

    public static ref int GetRef(int[] arr) => ref arr[0];

    public static void Run()
    {
        DemoHelper.Title("5. Methods");

        Console.WriteLine(Add(1, 2, 3));

        GetCoordinates(out int x, out int y);
        Console.WriteLine($"{x},{y}");

        int[] arr = { 5, 6, 7 };
        ref int first = ref GetRef(arr);
        first = 100;

        Console.WriteLine(arr[0]);
    }
}
#endregion

#region 6 Classes & Objects
class Person
{
    public string Name;
    public int Age;

    public void Greet()
    {
        Console.WriteLine($"Hello I am {Name}, {Age}");
    }

    public static void Run()
    {
        DemoHelper.Title("6. Classes & Objects");

        Person p = new Person { Name = "Atanu", Age = 26 };
        p.Greet();
    }
}
#endregion

#region 7 Constructors
class Car
{
    public string Model;

    public Car(string model)
    {
        Model = model;
    }

    public static void Run()
    {
        DemoHelper.Title("7. Constructors");

        Car c = new Car("BMW");
        Console.WriteLine(c.Model);
    }
}
#endregion

#region 8 Encapsulation & Properties
class Student
{
    private int age;

    public int Age
    {
        get { return age; }
        set
        {
            if (value > 0)
                age = value;
        }
    }

    public static void Run()
    {
        DemoHelper.Title("8. Encapsulation");

        Student s = new Student();
        s.Age = 20;

        Console.WriteLine(s.Age);
    }
}
#endregion

#region 9 Inheritance
class Animal
{
    public virtual void Speak()
    {
        Console.WriteLine("Animal sound");
    }
}

class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Woof");
    }
}

class InheritanceDemo
{
    public static void Run()
    {
        DemoHelper.Title("9. Inheritance");

        Animal a = new Dog();
        a.Speak();
    }
}
#endregion

#region 10 Abstraction & Interfaces
abstract class AbstractAnimal
{
    public abstract void Sound();
}

class Cat : AbstractAnimal
{
    public override void Sound()
    {
        Console.WriteLine("Meow");
    }
}

interface IVehicle
{
    void Drive();
}

class Bike : IVehicle
{
    public void Drive()
    {
        Console.WriteLine("Driving bike");
    }
}

class AbstractionDemo
{
    public static void Run()
    {
        DemoHelper.Title("10. Abstraction & Interfaces");

        Cat c = new Cat();
        c.Sound();

        Bike b = new Bike();
        b.Drive();
    }
}
#endregion

#region 11 Structs
readonly struct Point
{
    public int X { get; }
    public int Y { get; }

    public Point(int x, int y)
    {
        X = x;
        Y = y;
    }

    public override string ToString() => $"({X},{Y})";
}

class StructDemo
{
    public static void Run()
    {
        DemoHelper.Title("11. Structs");

        Point p = new Point(2, 3);
        Console.WriteLine(p);
    }
}
#endregion

#region 12 Generics
class Box<T>
{
    public T Value;

    public Box(T value)
    {
        Value = value;
    }
}

class GenericsDemo
{
    public static void Run()
    {
        DemoHelper.Title("12. Generics");

        Box<int> intBox = new Box<int>(100);
        Box<string> strBox = new Box<string>("Hello");

        Console.WriteLine(intBox.Value);
        Console.WriteLine(strBox.Value);
    }
}
#endregion

#region 13 Delegates & Events
delegate void MyDelegate(string msg);

class Messenger
{
    public event MyDelegate? OnMessage;

    public void Send(string msg)
    {
        OnMessage?.Invoke(msg);
    }
}

class DelegateDemo
{
    public static void Run()
    {
        DemoHelper.Title("13. Delegates & Events");

        Messenger m = new Messenger();

        m.OnMessage += msg => Console.WriteLine(msg);

        m.Send("Hello Event!");
    }
}
#endregion

#region 14 LINQ
class LinqDemo
{
    public static void Run()
    {
        DemoHelper.Title("14. LINQ");

        int[] nums = { 1, 2, 3, 4, 5 };

        var even = nums.Where(n => n % 2 == 0);

        foreach (var n in even)
            Console.WriteLine(n);

        var grouped = nums.GroupBy(n => n % 2 == 0 ? "Even" : "Odd");

        foreach (var g in grouped)
            Console.WriteLine($"{g.Key}: {g.Count()}");
    }
}
#endregion

#region 15 Tuples
class TupleDemo
{
    static (int sum, int product) Calc(int a, int b)
    {
        return (a + b, a * b);
    }

    public static void Run()
    {
        DemoHelper.Title("15. Tuples");

        var (sum, product) = Calc(3, 4);

        Console.WriteLine($"Sum {sum} Product {product}");
    }
}
#endregion

#region 16 Exception Handling
class ExceptionDemo
{
    public static void Run()
    {
        DemoHelper.Title("16. Exception Handling");

        try
        {
            int x = int.Parse("abc");
        }
        catch (FormatException)
        {
            Console.WriteLine("Invalid number");
        }
        finally
        {
            Console.WriteLine("Cleanup done");
        }
    }
}
#endregion

#region 17 File Handling
class FileDemo
{
    public static void Run()
    {
        DemoHelper.Title("17. File Handling");

        File.WriteAllText("test.txt", "Hello C#");

        string text = File.ReadAllText("test.txt");

        Console.WriteLine(text);
    }
}
#endregion

#region 18 Async Await
class AsyncDemo
{
    static async Task Delay()
    {
        await Task.Delay(1000);
        Console.WriteLine("Hello after delay");
    }

    public static async Task Run()
    {
        DemoHelper.Title("18. Async Await");

        await Delay();
    }
}
#endregion

#region 19 Reflection
class ReflectionDemo
{
    public static void Run()
    {
        DemoHelper.Title("19. Reflection");

        var type = typeof(Person);

        Console.WriteLine(type.Name);

        foreach (var p in type.GetProperties())
            Console.WriteLine(p.Name);
    }
}
#endregion

#region 20 Records
public record PersonRecord(string Name, int Age);

class RecordDemo
{
    public static void Run()
    {
        DemoHelper.Title("20. Records");

        var r1 = new PersonRecord("Atanu", 26);
        var r2 = r1 with { Age = 27 };

        Console.WriteLine(r1);
        Console.WriteLine(r2);
    }
}
#endregion

#region 21 Span
class SpanDemo
{
    public static void Run()
    {
        DemoHelper.Title("21. Span");

        Span<int> span = stackalloc int[] { 1, 2, 3, 4 };

        int sum = 0;

        foreach (var v in span)
            sum += v;

        Console.WriteLine(sum);
    }
}
#endregion

class Index
{
    static async Task Main()
    {
        Basics.Run();
        VariablesDemo.Run();
        OperatorsDemo.Run();
        ControlDemo.Run();
        MethodsDemo.Run();
        Person.Run();
        Car.Run();
        Student.Run();
        InheritanceDemo.Run();
        AbstractionDemo.Run();
        StructDemo.Run();
        GenericsDemo.Run();
        DelegateDemo.Run();
        LinqDemo.Run();
        TupleDemo.Run();
        ExceptionDemo.Run();
        FileDemo.Run();
        await AsyncDemo.Run();
        ReflectionDemo.Run();
        RecordDemo.Run();
        SpanDemo.Run();

        Console.WriteLine("\nAll demos completed.");
    }
}