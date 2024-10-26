// Function to sing the notes of a musical scale
function singSong() {
  console.log("DO"); // Print "DO"
  console.log("RE"); // Print "RE"
  console.log("MI"); // Print "MI"
}

// Function to greet a user with their full name
function greet(firstName, lastName) {
  // Use template literals to format the greeting message
  console.log(`Hey there, ${firstName} ${lastName[0]}.`); // Outputs first name and the initial of the last name
}

// Function to repeat a string a specified number of times
function repeat(str, numTimes) {
  let result = ""; // Initialize an empty string to hold the result
  for (let i = 0; i < numTimes; i++) {
    // Loop numTimes times
    result += str; // Concatenate the string to the result
  }
  console.log(result); // Output the final repeated string
}

// Function to add two numbers with input validation
function add(x, y) {
  // Check if both inputs are numbers
  if (typeof x !== "number" || typeof y !== "number") {
    return false; // Return false if either input is not a number
  }
  return x + y; // Return the sum of x and y if both are numbers
}

// Call greet function
var userFirstName = prompt("What is your first name?"); // Prompt user for their first name
var userLastName = prompt("What is your last name?"); // Prompt user for their last name
greet(userFirstName, userLastName); // Call greet with user inputs

// Call repeat function
repeat("Hello world", 3); // Repeat "Hello world" 3 times

// Call add function with different inputs
console.log(add(2, 3)); // Outputs: 5 (valid numbers)
console.log(add("test", 3)); // Outputs: false (invalid first argument)
console.log(add("1", "100")); // Outputs: false (both arguments are strings)

// Uncomment to call the singSong function multiple times
// for (let i = 0; i < 10; i++) {
//     singSong(); // Call singSong function 10 times
// }

// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
