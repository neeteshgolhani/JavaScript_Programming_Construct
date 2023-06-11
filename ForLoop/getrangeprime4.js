// Get the range of numbers
const start = parseInt(prompt("Enter the starting number:"));
const end = parseInt(prompt("Enter the ending number:"));

// Display the prime numbers within the range
console.log("Prime numbers between " + start + " and " + end + ":");

for (let number = start; number <= end; number++) {
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

  if (isPrime) {
    console.log(number);
  }
}
