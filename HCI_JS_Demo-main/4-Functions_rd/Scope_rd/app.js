// ==============
// FUNCTION SCOPE
// ==============

// Initialize a variable to keep track of the total number of eggs
let totalEggs = 0;

// Function to collect eggs
function collectEggs() {
    totalEggs = 6; // Modify the totalEggs variable within the function
}

// Log the initial value of totalEggs (should be 0)
console.log(totalEggs); // Output: 0

// Call the collectEggs function to set totalEggs to 6
collectEggs();

// Log the value of totalEggs after calling the function (should now be 6)
console.log(totalEggs); // Output: 6

// Demonstrating function scope with variable shadowing
const bird = "Scarlet Macaw"; // Global bird variable
function birdWatch() {
    const bird = "Great Blue Heron"; // Local bird variable (shadows the global variable)
    console.log(bird); // Output the local bird variable
}

// Call birdWatch function to see the local bird variable
birdWatch(); // Output: Great Blue Heron

// ==============
// BLOCK SCOPE
// ==============

// Uncommenting this code demonstrates block scope
let radius = 8; // Block scoped variable
if (radius > 0) {
    const PI = 3.14159; // PI is only accessible within this block
    let msg = 'HIII!'; // msg is also block scoped
}
// console.log(radius);     // Output: 8 (radius is accessible)
// console.log(msg);        // Error: msg is not defined (msg is block scoped)

// Using a loop to demonstrate block scope
for (let i = 0; i < 5; i++) {
    let msg = "ASKLDJAKLSJD"; // msg is scoped to this block
    console.log(msg); // Output: ASKLDJAKLSJD (five times)
}
// console.log(msg);        // Error: msg is not defined (msg is block scoped)
// console.log(i);          // Error: i is not defined (i is block scoped)

// ==============
// LEXICAL SCOPE
// ==============

// Function to simulate a bank robbery
function bankRobbery() {
    const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batwoman"]; // Array of heroes
    function cryForHelp() {
        let color = "purple"; // Local variable to cryForHelp
        function inner() {
        // Loop through heroes and log a help message for each
        for (let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
        }
        }
        inner(); // Call inner function to execute its code
    }
    cryForHelp(); // Call cryForHelp to execute its code
}

// Call the bankRobbery function to see the output
bankRobbery();

// Question: What is the Expected Output?
// Expected Output: 
// PLEASE HELP US, SPIDERMAN
// PLEASE HELP US, WOLVERINE
// PLEASE HELP US, BLACK PANTHER
// PLEASE HELP US, BATWOMAN
