import java.util.Scanner;

public class Fibonacci {

    // Fibonacci method
    private static int Fibonacci(int n) {
        if (n == 0)
            return 0;
        else if (n == 1)
            return 1;
        else
            return Fibonacci(n - 1) + Fibonacci(n - 2); // Fibonacci sequence formula 
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in); // Scanner object 

        System.out.print("Enter the number of terms: ");
        int n = sc.nextInt(); // number of terms

        for (int i = 0; i < n; i++) {
            System.out.print(Fibonacci(i) + " ");
        }

        sc.close();
    }
}