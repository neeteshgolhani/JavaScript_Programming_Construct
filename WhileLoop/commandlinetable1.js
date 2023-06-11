// Get the command-line argument
const n = parseInt(process.argv[2]);

// Validate the input
if (isNaN(n) || n < 0) {
  console.log("Invalid input. Please enter a non-negative integer.");
} else {
  console.log("Powers of 2 up to 2^" + n + " until 256 is reached:");

  let power = 0;
  let result = 1;

  while (result <= 256 && power <= n) {
    console.log("2^" + power + " = " + result);
    power++;
    result *= 2;
  }
}
