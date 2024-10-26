//https://www.w3schools.com/jsref/jsref_foreach.asp
//The forEach() method calls a function for each element in an array.
//The forEach() method is not executed for empty elements.

// Array of numbers from 1 to 20
const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// Using forEach to log even numbers from the array
numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
});

// same as:
// for (let el of numbers) {
//     console.log(el);
// }

// Array of movie objects with title and score properties
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

// Question: Using forEach to log each movie's title and score
// Log the title and score of each movie
const map_of_movies = new Map();
movies.forEach( function(a_movie) {
    map_of_movies.set(a_movie['title'].toLocaleUpperCase(), a_movie['score']);
})

// test
map_of_movies.keys().forEach( function(movie_title) {
    console.log('title:', movie_title)
})
