// Assuming 'testScores' is an object with people's names as keys and their scores as values
const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60,
};
// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================

    // so it's like [below] in Python.
    // `for key in dictionary:`
    // `    print(key, dictionary[key])`
// Using a 'for...in' loop to iterate through each key (person's name) in the 'testScores' object
for (let person in testScores) {
    // Log a message showing the person's name and their corresponding score
    console.log(`${person} scored ${testScores[person]}`);
}

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

// Question: Write the code using Object methods to iterate
// Reference: https://kurtwanger40.medium.com/methods-to-iterate-through-js-objects-d7b3ce48a8dd

// Initialize a total variable to keep track of the sum of scores
// Extract the values (scores) from the testScores object and store them in an array
// Iterate over each score in the scores array
// Add each score to the total
// Calculate the average by dividing the total by the number of scores
