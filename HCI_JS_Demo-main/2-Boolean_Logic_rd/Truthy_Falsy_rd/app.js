// Prompt the user to input something

// Check if the user input is truthy or falsy
// If the input has a truthy value (not empty, not null, not undefined, etc.), log "TRUTHY!"
// If the input is falsy (empty string, null, undefined, 0, etc.), log "FALSY!"

if (0) {
    console.log("TRUTHY")
} else {
    console.log("FALSY") // this
}

if (NaN) {
    console.log("TRUTHY")
} else {
    console.log("FALSY") // this
}

if (undefined) {
    console.log("TRUTHY")
} else {
    console.log("FALSY") // this
}

if (' ') {
    console.log("TRUTHY") // this (there's a space, and space is a character)
} else {
    console.log("FALSY")
}

if ('') {
    console.log("TRUTHY") 
} else {
    console.log("FALSY") // this
}

