package main

import "fmt"

func multiplicationTable() {
	var num int // Declare a variable to hold the number for which we want to print the multiplication table
	fmt.Print("Enter the number to print the multiplication table: ")
	fmt.Scan(&num) // Read the number from user input
	for i := 1; i <= 10; i++ {
		fmt.Printf("%d * %d = %d\n", num, i, num*i)
	}
}
