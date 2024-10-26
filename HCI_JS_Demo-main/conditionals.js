// Prompt the user to input their favorite art type
var artType = prompt("What is your favorite art type?");

// Use a switch statement to evaluate the user's input
let output = "";
// If the user enters "PT", set output to "Painting"
if (artType === 'PT') {
    output = 'Painting';
}
// If the user enters "SC", set output to "Sculpture"
else if (artType === 'SC') {
    output = 'Sculpture';
}
// For any other input, set output to "Other"
else {
    output = 'Other';
}

// Display the result on the webpage, using <strong> to bold the art type
document.write("<b>"+ output +"</b>");