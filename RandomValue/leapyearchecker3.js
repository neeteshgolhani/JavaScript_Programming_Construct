// Function to check if a year is a leap year
function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
      // Check if the year is not divisible by 100 or it is divisible by 400
      if (year % 100 !== 0 || year % 400 === 0) {
        return true; // It is a leap year
      } else {
        return false; // It is not a leap year
      }
    } else {
      return false; // It is not a leap year
    }
  }
  
  // Prompt the user to enter a year
  const year = parseInt(prompt("Enter a year:"));
  
  // Check if the input is a valid number
  if (isNaN(year)) {
    console.log("Invalid input. Please enter a valid year.");
  } else {
    // Check if the year is a leap year using the isLeapYear() function
    if (isLeapYear(year)) {
      console.log(year + " is a Leap Year.");
    } else {
      console.log(year + " is not a Leap Year.");
    }
  }
  