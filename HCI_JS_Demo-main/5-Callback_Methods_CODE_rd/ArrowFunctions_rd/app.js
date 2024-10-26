/*https://www.w3schools.com/js/js_arrow_function.asp
 **Arrow functions were introduced in ES6.
 **Arrow functions allow us to write shorter function syntax:*/

// const add = function(x,y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

// Example of arrow functions
const add = (a, b) => a + b;

const square = (num) => {
  return num * num;
};

// Traditional function to roll a die
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

// Question 1: Use Arrow function to roll a die with implicit return
const rollDie_implicit = () => Math.floor(Math.random() * 6) + 1; // Implicitly returns the random number (1-6)
console.log(rollDie_implicit())

const movies = [
    {
        title: "Amadeus",
        score: 99,
    },
    {
        title: "Stand By Me",
        score: 85,
    },
    {
        title: "Parasite",
        score: 95,
    },
    {
        title: "Alien",
        score: 90,
    },
];

// Traditional Function
const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
})

// Question 2:  IMPLICIT RETURN return to map the movies
const newMovies_implicit = movies.map(movie => `${movie.title} - ${(movie.score / 10)}`);
console.log(newMovies_implicit)
    // explanation: function (movie) {return `${movie.title} - ${movie.score / 10}`}
    //              became 
    //              movie => `${movie.title} - ${(movie.score / 10)}`
