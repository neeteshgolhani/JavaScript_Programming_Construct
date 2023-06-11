// Function to convert a single-digit number to its corresponding word
function convertToWord(number) {
    let word;
  
    switch (number) {
      case 0:
        word = "Zero";
        break;
      case 1:
        word = "One";
        break;
      case 2:
        word = "Two";
        break;
      case 3:
        word = "Three";
        break;
      case 4:
        word = "Four";
        break;
      case 5:
        word = "Five";
        break;
      case 6:
        word = "Six";
        break;
      case 7:
        word = "Seven";
        break;
      case 8:
        word = "Eight";
        break;
      case 9:
        word = "Nine";
        break;
      default:
        word = "Invalid input";
        break;
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
  