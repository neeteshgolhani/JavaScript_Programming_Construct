// Get the command-line argument
const n = parseInt(process.argv[2]);

// Check if the input is a valid number
if (isNaN(n) || n < 1) {
  console.log("Invalid input. Please enter a positive integer.");
} else {
  let harmonicNumber = 0;

  // Calculate the harmonic number
  for (let i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
  }

  console.log("The " + n + "th harmonic number is: " + harmonicNumber.toFixed(4));
}
