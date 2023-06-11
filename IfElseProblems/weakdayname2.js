// Function to get the weekday name from a number (0 for Sunday, 1 for Monday, etc.)
function getWeekdayName(number) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    if (number >= 0 && number < 7) {
      return weekdays[number];
    } else {
      return 'Invalid input';
    }
  }
  
  // Prompt the user to enter a number for the weekday
  const number = parseInt(prompt('Enter a number for the weekday (0-6):'));
  
  // Check if the input is a valid number for the weekday
  if (isNaN(number) || number < 0 || number > 6) {
    console.log('Invalid input. Please enter a number between 0 and 6.');
  } else {
    const weekdayName = getWeekdayName(number);
    console.log('The weekday is: ' + weekdayName);
  }
  