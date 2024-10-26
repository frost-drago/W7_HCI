// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";
// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!")


// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!")

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

    // Number guessing game 

// Prompt the user for the maximum number and validate input
let maximum = parseInt(prompt("Enter the maximum number!")); // Initial prompt for maximum number
while (isNaN(maximum) || maximum <= 0) {
    // Validate that input is a positive number
    maximum = parseInt(prompt("Enter a valid positive number!")); // Keep prompting until valid
}

// Generate a random target number between 1 and maximum
const targetNum = Math.floor(Math.random() * maximum) + 1;
let attempts = 0; // Initialize the attempts counter
let guess; // Variable to hold the user's guess

// Start the guessing loop
while (true) {
    guess = prompt("Enter your guess (or 'q' to quit):"); // Prompt user for a guess

    // Allow user to quit the game
    if (guess === "q") {
        alert("OK, YOU QUIT!"); // Inform the user they have quit
        break; // Exit the loop
    }

    // Convert guess to a number for comparison
    const guessNumber = parseInt(guess); // Convert the guess input to a number

    // Validate that the guess is a number
    if (isNaN(guessNumber)) {
        alert("Please enter a valid number!"); // Prompt user for a valid number
        continue; // Skip to the next iteration of the loop
    }

    attempts++; // Increment the attempts counter

    // Check if the guess is higher or lower than the target number
    if (guessNumber > targetNum) {
        alert("Too high! Try again."); // Inform user if guess is too high
    } else if (guessNumber < targetNum) {
        alert("Too low! Try again."); // Inform user if guess is too low
    } else {
        alert("CONGRATS YOU WIN!"); // Inform user of their victory
        alert(`You got it! It took you ${attempts} guesses.`); // Display number of attempts
        break; // Exit the loop after a correct guess
    }
}
