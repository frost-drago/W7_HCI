const subreddits = [
    "cringe",
    "books",
    "chickens",
    "funny",
    "pics",
    "soccer",
    "gunners",
];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// iterate over the array subreddits

// Using a 'for...of' loop to iterate through each subreddit in the 'subreddits' array
for (let subreddit of subreddits) {
  // Log a message that combines the subreddit name into a full URL
  console.log(`Visit reddit.com/r/${subreddit}`);
}

    // Ooh.. I did this on the ForLoops folder.

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// for (let char of "hello world") {
//     console.log(char)
// }
