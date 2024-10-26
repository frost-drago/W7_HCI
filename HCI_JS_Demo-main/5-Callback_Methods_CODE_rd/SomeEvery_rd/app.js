//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
/*The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
 **The every() method returns true if the function returns true for all elements.
 **The every() method returns false if the function returns false for one element.
 */

// Array of exam scores
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

// Using every to check if all exam scores are at least 75
let examValid = exams.every((score) => score >= 75);

// Output whether all exam scores are valid
console.log(examValid);
// Output: true (since all scores are >= 75)

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
        year: 2010,
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

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
/*The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
 */

// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns true if the function returns true for at least one element.
let movieValid = movies.some((movie) => movie.year > 2015);
// Output whether any movie was released after 2015
console.log(movieValid);

// Question: What is the output?
    // Output is: false
    //            since the latest movie is 2013, which is not greater than 2015
