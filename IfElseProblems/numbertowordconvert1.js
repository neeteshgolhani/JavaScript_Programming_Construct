// Function to convert a single-digit number to its corresponding word
function convertToWord(number) {
    let word;
    if (number === 0) {
      word = "Zero";
    } else if (number === 1) {
      word = "One";
    } else if (number === 2) {
      word = "Two";
    } else if (number === 3) {
      word = "Three";
    } else if (number === 4) {
      word = "Four";
    } else if (number === 5) {
      word = "Five";
    } else if (number === 6) {
      word = "Six";
    } else if (number === 7) {
      word = "Seven";
    } else if (number === 8) {
      word = "Eight";
    } else if (number === 9) {
      word = "Nine";
    } else {
      word = "Invalid input";
    }
    return word;
  }
  
  // Prompt the user to enter a single-digit number
  const number = parseInt(prompt("Enter a single-digit number:"));
  
  // Check if the input is a valid single-digit number
  if (isNaN(number) || number < 0 || number > 9) {
    console.log("Invalid input. Please enter a single-digit number.");
  } else {
    const word = convertToWord(number);
    console.log("The number in words is: " + word);
  }
  