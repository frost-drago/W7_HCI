//https://www.w3schools.com/js/js_timing.asp
/*setTimeout(function, milliseconds)
 **The setTimeout() method calls a function after a number of milliseconds.
 **1 second = 1000 milliseconds.
 **The setTimeout() is executed only once. */
//If you need repeated executions, use setInterval() instead.
//setInterval(function, milliseconds)
//Use the clearTimeout() method to prevent the function from starting.

// Log a greeting message to the console
console.log("HELLO!!!...");
// Set a timeout to log a message after 3 seconds (3000 milliseconds)
setTimeout(() => {
  console.log("...are you still there?"); // This message will be logged after 3 seconds
}, 3000);

// Log a goodbye message immediately
console.log("GOODBYE!!");

// Set an interval to log a random number every 2 seconds (2000 milliseconds)
const id = setInterval(() => {
  console.log(Math.random()); // Log a random number to the console
}, 2000);

// Uncomment the next line to stop the interval after 10 seconds
setTimeout(() => clearInterval(id), 10000); // This will clear the interval after 10 seconds
