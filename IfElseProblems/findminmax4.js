// Function to perform arithmetic operations and find the maximum and minimum results
function findMinMax(a, b, c) {
    // Perform the arithmetic operations
    const result1 = a + b * c;
    const result2 = a % b + c;
    const result3 = c + a / b;
    const result4 = a * b + c;
  
    // Find the maximum result
    const maxResult = Math.max(result1, result2, result3, result4);
  
    // Find the minimum result
    const minResult = Math.min(result1, result2, result3, result4);
  
    // Display the results
    console.log('Maximum result:', maxResult);
    console.log('Minimum result:', minResult);
  }
  
  // Prompt the user to enter three numbers
  const a = parseFloat(prompt('Enter the first number:'));
  const b = parseFloat(prompt('Enter the second number:'));
  const c = parseFloat(prompt('Enter the third number:'));
  
  // Check if the inputs are valid numbers
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input. Please enter valid numbers.');
  } else {
    findMinMax(a, b, c);
  }
  