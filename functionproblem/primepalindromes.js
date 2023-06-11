// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Function to get the palindrome of a number
  function getPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return parseInt(reversedStr);
  }
  
  // Main function to check if a prime number and its palindrome are also prime
  function checkPrimeAndPalindrome() {
    const num = parseInt(prompt("Enter a number:"));
  
    if (isNaN(num)) {
      console.log("Invalid input. Please enter a valid number.");
      return;
    }
  
    if (isPrime(num)) {
      console.log(num + " is a prime number.");
  
      const palindrome = getPalindrome(num);
      console.log("Palindrome of " + num + " is " + palindrome);
  
      if (isPrime(palindrome)) {
        console.log(palindrome + " is also a prime number.");
      } else {
        console.log(palindrome + " is not a prime number.");
      }
    } else {
      console.log(num + " is not a prime number.");
    }
  }
  
  // Call the main function
  checkPrimeAndPalindrome();
  
  