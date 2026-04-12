function printName() {
    console.log(this.name)
}

printName.call({ name: "Alice" });