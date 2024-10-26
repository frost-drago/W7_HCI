// In JavaScript, a new function defines its own `this` value.
// However, this is not the case for arrow functions, which inherit `this` from their enclosing scope.

const person = {
    firstName: "Viggo", // Property for first name
    lastName: "Mortensen", // Property for last name
    // Method to return the full name using `this` to access object properties
    fullName: function () {
        return `${this.firstName} ${this.lastName}`; // Returns full name
    },
    // Method to shout the full name after a delay
    shoutName: function () {
        // Using an arrow function in setTimeout to maintain the context of `this`
        setTimeout(() => {
        // The keyword 'this' in arrow functions refers to the value of 'this' when the function is created
        console.log(this); // Logs the person object
        console.log(this.fullName()); // Calls the fullName method and logs the result
        }, 3000); // 3 seconds delay
    },
};

// Question, if we use the.shoutName() , what is the output?
person.shoutName();
    // Output: 
    // {firstName: 'Viggo', lastName: 'Mortensen', fullName: ƒ, shoutName: ƒ} 
    // Viggo Mortensen

    // The first part ({firstName: 'Viggo', lastName: 'Mortensen', fullName: ƒ, shoutName: ƒ}) is from console.log(this)
    // The second part (Viggo Mortensen) is from console.log(this.fullName())
