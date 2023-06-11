// Function to convert feet to inches
function feetToInch(feet) {
    return feet * 12;
  }
  
  // Function to convert inches to feet
  function inchToFeet(inch) {
    return inch / 12;
  }
  
  // Function to convert feet to meters
  function feetToMeter(feet) {
    return feet * 0.3048;
  }
  
  // Function to convert meters to feet
  function meterToFeet(meter) {
    return meter / 0.3048;
  }
  
  // Prompt the user to enter the conversion choice
  const choice = parseInt(prompt("Choose the conversion:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet"));
  
  // Prompt the user to enter the length value
  const length = parseFloat(prompt("Enter the length value:"));
  
  // Check if the input is a valid choice
  if (isNaN(choice) || choice < 1 || choice > 4) {
    console.log("Invalid choice. Please choose a valid conversion option (1-4).");
  } else if (isNaN(length)) {
    console.log("Invalid length value. Please enter a valid number.");
  } else {
    let result;
  
    // Perform the selected conversion based on the choice
    switch (choice) {
      case 1:
        result = feetToInch(length);
        console.log(length + " feet is equal to " + result + " inches.");
        break;
      case 2:
        result = feetToMeter(length);
        console.log(length + " feet is equal to " + result + " meters.");
        break;
      case 3:
        result = inchToFeet(length);
        console.log(length + " inches is equal to " + result + " feet.");
        break;
      case 4:
        result = meterToFeet(length);
        console.log(length + " meters is equal to " + result + " feet.");
        break;
    }
  }
  