// Get the input number
const number = parseInt(prompt("Enter a number:"));

// Calculate the factorial
let factorial = 1;

if (number >= 0) {
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
}

// Display the result
console.log(number + "! = " + factorial);
