// Get the value of n from the user
const n = parseInt(prompt("Enter a non-negative integer for n:"));

// Check if the input is a valid number
if (isNaN(n) || n < 0) {
  console.log("Invalid input. Please enter a non-negative integer.");
} else {
  console.log("Powers of 2 up to 2^" + n + ":");

  // Print the table of powers of 2
  for (let i = 0; i <= n; i++) {
    const power = Math.pow(2, i);
    console.log("2^" + i + " = " + power);
  }
}
