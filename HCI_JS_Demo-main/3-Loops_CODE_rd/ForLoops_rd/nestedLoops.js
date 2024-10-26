// ===================================
// NESTED FOR LOOP EXAMPLES
// ===================================

// Outer loop: iterates through the numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    // Log the current value of 'i'
    console.log(`i is: ${i}`);

    // Inner loop: runs for each iteration of the outer loop
    for (let j = 1; j < 4; j++) {
        // Log the value of 'j' (1, 2, 3) indented under the current 'i'
        console.log(`     j is: ${j}`);
    }
}

// ===================================
// NESTED ARRAY ITERATION
// ===================================

const seatingChart = [
    ["Kristen", "Erik", "Namita"], // Row 1
    ["Geoffrey", "Juanita", "Antonio", "Kevin"], // Row 2
    ["Yuma", "Sakura", "Jack", "Erika"], // Row 3
];

// Practice: Write the code:
// Outer loop: iterates over each row in the seating chart array
// Access the current row (sub-array)
// Display the row number (i+1 because arrays are zero-indexed)
// Inner loop: iterates through each name in the current row
// Log each individual name in the row
for (let row = 1; row <= 3; row++) {
    for (let name of seatingChart[row]) {
        console.log('row:', row, '; student:', name)
    }
}
