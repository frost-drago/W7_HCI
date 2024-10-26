// there are 5 ways to make methods
// #1
// var o = new Object();
// o.method = function(){}

// #2
// var o = new Object();
// o.prototype.method = function(){}

// #3
// function myObject() {
//     this.method = function(){}
// }
// var o = new myObject();

// #4
// function myObject() {}
// myObject.prototype.method = function(){}
// var o = new myObject();

// #5
// var o = {
//     method: function(){}
// }

// Math utility object with mathematical constants and functions
const myMath = {
    PI: 3.14159, // Value of PI
    square(num) {
        // Function to calculate the square of a number
        return num * num;
    },
    cube(num) {
        // Function to calculate the cube of a number
        return num ** 3;
    },
};

// Dog object representing a dog with properties and methods
const dog = {
    name: "Buddy", // Name of the dog
    color: "brown", // Color of the dog
    breed: "Golden Retriever", // Breed of the dog
    bark() {
        // Method for the dog to bark
        console.log("THIS IS:", this); // Display the context of 'this'
        console.log(`${this.name} says WOOF WOOF!`); // Dog's bark message
    },
};

// Call functions from myMath object and display results
console.log(myMath.PI); // Output the value of PI

console.log(myMath.square(3)); // Output the square of 3

document.write("The cube value: " + myMath.cube(4)); // Output the cube of 4 to the document

// Construct a message about the dog and display it
let message = `${dog.name} is ${dog.color} in color and is a ${dog.breed}.`; // Create a message string
alert(message); // Display the message in an alert box

dog.bark(); // Call the bark method on the dog object
