// Function to display the place value of a number
function displayPlaceValue(number) {
    const places = ["unit", "ten", "hundred", "thousand", "ten thousand", "hundred thousand", "million", "ten million"];
  
    const numberString = number.toString();
    const length = numberString.length;
  
    if (length <= places.length) {
      const placeIndex = length - 1;
      const placeValue = places[placeIndex];
      console.log("Place value of " + number + " is: " + placeValue);
    } else {
      console.log("Invalid input");
    }
  }
  
  // Prompt the user to enter a number
  const number = parseInt(prompt("Enter a number (1, 10, 100, 1000, etc.):"));
  
  // Check if the input is a valid number
  if (isNaN(number) || number <= 0 || number % 10 !== 0) {
    console.log("Invalid input. Please enter a positive number that is a power of 10.");
  } else {
    displayPlaceValue(number);
  }
  