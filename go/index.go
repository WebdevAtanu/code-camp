package main

import (
	"errors"
	"fmt"
	"math"
	"sync"
	"time"
)

const PI = 3.14159

// Struct
type Person struct {
	Name string
	Age  int
}

// Method
func (p Person) Introduce() {
	fmt.Println("Name:", p.Name, "Age:", p.Age)
}

// Interface
type Shape interface {
	Area() float64
}

type Circle struct {
	Radius float64
}

func (c Circle) Area() float64 {
	return PI * c.Radius * c.Radius
}

// Function
func add(a int, b int) int {
	return a + b
}

// Multiple Return Values
func divide(a float64, b float64) (float64, error) {
	if b == 0 {
		return 0, errors.New("division by zero")
	}
	return a / b, nil
}

// Variadic Function
func sum(nums ...int) int {
	total := 0
	for _, n := range nums {
		total += n
	}
	return total
}

// Pointer
func increment(num *int) {
	*num++
}

// Closure
func counter() func() int {
	count := 0
	return func() int {
		count++
		return count
	}
}

// Generic Function
func Print[T any](value T) {
	fmt.Println(value)
}

func worker(id int, wg *sync.WaitGroup) {
	defer wg.Done()

	fmt.Printf("Worker %d started\n", id)
	time.Sleep(time.Second)
	fmt.Printf("Worker %d finished\n", id)
}

func main() {

	// Variables
	var name string = "Boss"
	age := 26

	fmt.Println(name, age)

	// Data Types
	var i int = 100
	var f float64 = 99.99
	var b bool = true
	var s string = "Go"

	fmt.Println(i, f, b, s)

	// Array
	arr := [5]int{1, 2, 3, 4, 5}
	fmt.Println(arr)

	// Slice
	slice := []int{10, 20, 30}
	slice = append(slice, 40)
	fmt.Println(slice)

	// Map
	student := map[string]int{
		"Math":    90,
		"Science": 95,
	}
	fmt.Println(student)

	// Struct
	p := Person{
		Name: "John",
		Age:  30,
	}
	p.Introduce()

	// Functions
	fmt.Println("Add:", add(5, 10))

	// Multiple Return
	result, err := divide(10, 2)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Division:", result)
	}

	// Variadic
	fmt.Println("Sum:", sum(1, 2, 3, 4, 5))

	// Pointer
	x := 10
	increment(&x)
	fmt.Println("Pointer:", x)

	// Loop
	for i := 1; i <= 5; i++ {
		fmt.Print(i, " ")
	}
	fmt.Println()

	// Range Loop
	for index, value := range slice {
		fmt.Println(index, value)
	}

	// If Else
	if age >= 18 {
		fmt.Println("Adult")
	} else {
		fmt.Println("Minor")
	}

	// Switch
	day := 3

	switch day {
	case 1:
		fmt.Println("Monday")
	case 2:
		fmt.Println("Tuesday")
	case 3:
		fmt.Println("Wednesday")
	default:
		fmt.Println("Unknown")
	}

	// Closure
	next := counter()
	fmt.Println(next())
	fmt.Println(next())
	fmt.Println(next())

	// Interface
	var shape Shape = Circle{Radius: 5}
	fmt.Println("Area:", shape.Area())

	// Anonymous Function
	func() {
		fmt.Println("Anonymous Function")
	}()

	// Goroutine
	go func() {
		fmt.Println("Running Goroutine")
	}()

	time.Sleep(time.Second)

	// Channel
	ch := make(chan string)

	go func() {
		ch <- "Hello Channel"
	}()

	msg := <-ch
	fmt.Println(msg)

	// Buffered Channel
	buffered := make(chan int, 2)

	buffered <- 1
	buffered <- 2

	fmt.Println(<-buffered)
	fmt.Println(<-buffered)

	// Select
	ch1 := make(chan string)
	ch2 := make(chan string)

	go func() {
		time.Sleep(time.Second)
		ch1 <- "Channel 1"
	}()

	go func() {
		time.Sleep(2 * time.Second)
		ch2 <- "Channel 2"
	}()

	select {
	case msg := <-ch1:
		fmt.Println(msg)
	case msg := <-ch2:
		fmt.Println(msg)
	}

	// WaitGroup
	var wg sync.WaitGroup

	for i := 1; i <= 3; i++ {
		wg.Add(1)
		go worker(i, &wg)
	}

	wg.Wait()

	// Generics
	Print("Hello Generic")
	Print(100)

	// Math Package
	fmt.Println("Square Root:", math.Sqrt(25))

	fmt.Println("Program Completed")
}

