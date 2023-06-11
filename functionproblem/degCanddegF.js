function convertTemperature() {
    // Prompt the user to enter the conversion selection and temperature value
    const conversion = prompt("Enter '1' to convert from Celsius to Fahrenheit or '2' to convert from Fahrenheit to Celsius:");
    const temperature = parseFloat(prompt("Enter the temperature value:"));
  
    // Check if the temperature value is valid
    if (isNaN(temperature)) {
      console.log("Invalid temperature value. Please enter a valid number.");
      return;
    }
  
    // Perform the temperature conversion based on the conversion selection
    switch (conversion) {
      case "1":
        // Check if the temperature value is within the valid range for Celsius to Fahrenheit conversion
        if (temperature >= 0 && temperature <= 100) {
          const degF = (temperature * 9/5) + 32;
          console.log(temperature + " °C is equal to " + degF + " °F");
        } else {
          console.log("Temperature value is outside the valid range for Celsius to Fahrenheit conversion.");
        }
        break;
      case "2":
        // Check if the temperature value is within the valid range for Fahrenheit to Celsius conversion
        if (temperature >= 32 && temperature <= 212) {
          const degC = (temperature - 32) * 5/9;
          console.log(temperature + " °F is equal to " + degC + " °C");
        } else {
          console.log("Temperature value is outside the valid range for Fahrenheit to Celsius conversion.");
        }
        break;
      default:
        console.log("Invalid conversion selection. Please enter '1' or '2'.");
    }
  }
  
  // Call the function to start the temperature conversion
  convertTemperature();
  