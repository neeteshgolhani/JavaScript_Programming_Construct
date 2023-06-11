// Get the input number
const number = parseInt(prompt("Enter a number:"));

// Check if the number is a prime number
let isPrime = true;

if (number === 1) {
  isPrime = false;
} else if (number > 1) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

// Display the result
if (isPrime) {
  console.log(number + " is a prime number.");
} else {
  console.log(number + " is not a prime number.");
}
