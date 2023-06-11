// Function to get the weekday name from a number (0 for Sunday, 1 for Monday, etc.)
function getWeekdayName(number) {
    let weekday;
  
    switch (number) {
      case 0:
        weekday = "Sunday";
        break;
      case 1:
        weekday = "Monday";
        break;
      case 2:
        weekday = "Tuesday";
        break;
      case 3:
        weekday = "Wednesday";
        break;
      case 4:
        weekday = "Thursday";
        break;
      case 5:
        weekday = "Friday";
        break;
      case 6:
        weekday = "Saturday";
        break;
      default:
        weekday = "Invalid input";
        break;
    }
  
    return weekday;
  }
  
  // Prompt the user to enter a number for the weekday
  const number = parseInt(prompt("Enter a number for the weekday (0-6):"));
  
  // Check if the input is a valid number for the weekday
  if (isNaN(number) || number < 0 || number > 6) {
    console.log("Invalid input. Please enter a number between 0 and 6.");
  } else {
    const weekdayName = getWeekdayName(number);
    console.log("The weekday is: " + weekdayName);
  }
  