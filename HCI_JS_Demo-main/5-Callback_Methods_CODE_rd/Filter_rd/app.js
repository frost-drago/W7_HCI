//https://www.w3schools.com/jsref/jsref_filter.asp
///The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not execute the function for empty elements.
//The filter() method does not change the original array.*/

// Array of numbers from 1 to 20
const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// Using filter to create a new array of numbers less than 10
numbers.filter((n) => {
    return n < 10;
});

    // Based on the above:
    // console.log(numbers.filter((n) => {
    //     return n < 10;
    // }))
    // Result: 1, 2, 3, 4, 5, 6, 7, 8, 9


// Array of movie objects with title, score, and year properties
const movies = [
    {
        title: "Amadeus",
        score: 99,
        year: 1984,
    },
    {
        title: "Sharknado",
        score: 35,
        year: 2013,
    },
    {
        title: "13 Going On 30",
        score: 70,
        year: 2004,
    },
    {
        title: "Stand By Me",
        score: 85,
        year: 1986,
    },
    {
        title: "Waterworld",
        score: 62,
        year: 1995,
    },
    {
        title: "Jingle All The Way",
        score: 71,
        year: 1996,
    },
    {
        title: "Parasite",
        score: 95,
        year: 2019,
    },
    {
        title: "Notting Hill",
        score: 77,
        year: 1999,
    },
    {
        title: "Alien",
        score: 90,
        year: 1979,
    },
];
// Using filter to create a new array of movies with a score less than 70
const badMovies = movies.filter((m) => m.score < 70);
// Output the bad movies
console.log(badMovies);
// Output: [{ title: 'Sharknado', score: 35, year: 2013 }, { title: 'Waterworld', score: 62, year: 1995 }]

// Using filter to create a new array of movies released after the year 2000
const recentMovies = movies.filter((m) => m.year > 2000);
// Output the recent movies
console.log(recentMovies);
// Output: [{ title: 'Sharknado', score: 35, year: 2013 }, { title: '13 Going On 30', score: 70, year: 2004 }, { title: 'Parasite', score: 95, year: 2019 }]
// const goodMovies = movies.filter(m => m.score > 80)
// const goodTitles = goodMovies.map(m => m.title)

// Question 1: Chaining filter and map methods to get titles of good movies(score > 80)
const goodMovieTitles = movies.filter(movie => movie.score > 80).map(movie => movie.title);

// Question 2: What is the output
console.log(goodMovieTitles);
    // Output is an array of 4:
    // 0: "Amadeus"
    // 1: "Stand By Me"
    // 2: "Parasite"
    // 3: "Alien"