// Try-catch block example (commented out because it causes an error)
// Uncommenting this will show how error handling works when an undefined variable is used
try {
    hello.toUpperCase(); // This will throw a ReferenceError because 'hello' is not defined
} catch {
    console.log("ERROR!!!!"); // Catch block executes if there is an error
}
// hello.toUpperCase(); // This line will not run because of the previous error

console.log("AFTER!"); // This line will not run because of the previous error. Commenting out previous line fixes this.

// Function that attempts to yell a message
function yell(msg) {
    try {
        // Try to convert the message to uppercase and repeat it three times
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        // Catch any error and display a friendly message
        console.log("Please pass a string next time!"); // Inform the user to provide a string
    }
}

// Call the function with a non-string message
let msg1 = 123; // This is a number, not a string
yell(msg1); // Output: "PLEASE PASS A STRING NEXT TIME!"

// Call the function with a valid string message
let msg2 = "Hello World"; // This is a valid string
yell(msg2);

// Question: What is the sample Output?
