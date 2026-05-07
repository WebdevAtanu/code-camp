import java.io.*; // input-output framework 
import java.util.*; // collection framework (sets, lists, maps, queues, stacks) 
import java.util.stream.*; // stream processing framework 
import java.lang.*; // language framework 
import java.math.*; // math framework
import java.time.*; // date and time framework


// =========================================================
// MAIN CLASS
// =========================================================
public class index {

    // =====================================================
    // 1. MAIN METHOD (ENTRY POINT)
    // =====================================================
    public static void main(String[] args) {

        System.out.println("===== JAVA FULL GUIDE =====");

        // BASIC OUTPUT
        System.out.println("Hello World");

        // VARIABLES
        int age = 25;
        String name = "Atanu";
        double height = 5.9;
        boolean isDeveloper = true;

        System.out.println(name + " " + age);

        // =====================================================
        // 2. OPERATORS
        // =====================================================
        int a = 10, b = 3;

        System.out.println(a + b); // add
        System.out.println(a - b); // subtract
        System.out.println(a * b); // multiply
        System.out.println(a / b); // divide
        System.out.println(a % b); // modulus

        // =====================================================
        // 3. CONDITIONAL STATEMENTS
        // =====================================================
        if (age < 18) {
            System.out.println("Minor");
        } else if (age == 25) {
            System.out.println("Exactly 25");
        } else {
            System.out.println("Adult");
        }

        // SWITCH CASE
        int day = 2;
        switch (day) {
            case 1 -> System.out.println("Monday");
            case 2 -> System.out.println("Tuesday");
            default -> System.out.println("Other day");
        }

        // =====================================================
        // 4. LOOPS
        // =====================================================

        // for loop
        for (int i = 0; i < 5; i++) {
            System.out.println("For: " + i);
        }

        // while loop
        int i = 0;
        while (i < 3) {
            System.out.println("While: " + i);
            i++;
        }

        // do-while loop
        int j = 0;
        do {
            System.out.println("Do While: " + j);
            j++;
        } while (j < 3);

        // =====================================================
        // 5. ARRAYS
        // =====================================================
        int[] arr = {1, 2, 3, 4};

        for (int num : arr) {
            System.out.println("Array value: " + num);
        }

        // =====================================================
        // 6. METHODS (FUNCTIONS)
        // =====================================================
        System.out.println(add(5, 10));
        greet("Java");

        // =====================================================
        // 7. OOP (OBJECT ORIENTED PROGRAMMING)
        // =====================================================
        Person p = new Person("Atanu", 25);
        p.show();

        Employee e = new Employee("Dev", 30, 50000);
        e.showEmployee();

        // =====================================================
        // 8. COLLECTIONS FRAMEWORK
        // =====================================================

        // LIST
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        System.out.println(list);

        // SET
        Set<Integer> set = new HashSet<>();
        set.add(1);
        set.add(2);
        set.add(2);
        System.out.println(set);

        // MAP
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "One");
        map.put(2, "Two");
        System.out.println(map);

        // =====================================================
        // 9. EXCEPTION HANDLING
        // =====================================================
        try {
            int result = 10 / 0;
        } catch (ArithmeticException ex) {
            System.out.println("Cannot divide by zero");
        } finally {
            System.out.println("Finally block runs always");
        }

        // =====================================================
        // 10. FILE HANDLING
        // =====================================================
        try {
            FileWriter writer = new FileWriter("test.txt");
            writer.write("Hello Java File");
            writer.close();

            BufferedReader br = new BufferedReader(new FileReader("test.txt"));
            System.out.println(br.readLine());
            br.close();

        } catch (IOException e1) {
            e1.printStackTrace();
        }

        // =====================================================
        // 11. LAMBDA EXPRESSIONS
        // =====================================================
        List<Integer> nums = Arrays.asList(1, 2, 3, 4);

        nums.forEach(n -> System.out.println("Lambda: " + n));

        // =====================================================
        // 12. STREAM API (ADVANCED)
        // =====================================================
        List<Integer> evenNumbers = nums.stream()
                .filter(n -> n % 2 == 0)
                .collect(Collectors.toList());

        System.out.println("Even Numbers: " + evenNumbers);

        // =====================================================
        // 13. THREADING
        // =====================================================
        Thread t1 = new Thread(() -> {
            for (int k = 0; k < 3; k++) {
                System.out.println("Thread running: " + k);
            }
        });

        t1.start();

        // =====================================================
        // 14. GENERICS
        // =====================================================
        Box<String> box = new Box<>();
        box.setValue("Hello Generics");
        System.out.println(box.getValue());

        // =====================================================
        // END
        // =====================================================
    }

    // =====================================================
    // METHOD EXAMPLE
    // =====================================================
    static int add(int a, int b) {
        return a + b;
    }

    static void greet(String name) {
        System.out.println("Hello " + name);
    }
}

// =========================================================
// 15. CLASS EXAMPLE (OOP)
// =========================================================
class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void show() {
        System.out.println(name + " " + age);
    }
}

// =========================================================
// 16. INHERITANCE
// =========================================================
class Employee extends Person {
    int salary;

    Employee(String name, int age, int salary) {
        super(name, age);
        this.salary = salary;
    }

    void showEmployee() {
        System.out.println(name + " " + age + " " + salary);
    }
}

// =========================================================
// 17. GENERIC CLASS
// =========================================================
class Box<T> {
    private T value;

    public void setValue(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}