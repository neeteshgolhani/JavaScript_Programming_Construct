// Get the user's magic number
const magicNumber = parseInt(prompt("Think of a number between 1 and 100:"));

// Initialize the range
let min = 1;
let max = 100;

let found = false;

while (!found) {
  // Calculate the middle number
  const middle = Math.floor((min + max) / 2);

  // Check if the middle number is the magic number
  if (middle === magicNumber) {
    console.log("Magic number found: " + middle);
    found = true;
  } else {
    // Ask the user if the number is less than or greater than the middle number
    const response = prompt("Is your number less than " + middle + "? (yes/no)");

    if (response.toLowerCase() === "yes") {
      // Adjust the range accordingly
      max = middle - 1;
    } else {
      // Adjust the range accordingly
      min = middle + 1;
    }
  }
}
