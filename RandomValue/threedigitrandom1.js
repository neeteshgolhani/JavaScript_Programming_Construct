function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let minValue = Infinity; // Initialize minValue with infinity
  let maxValue = -Infinity; // Initialize maxValue with negative infinity
  
  for (let i = 0; i < 5; i++) {
    let randomValue = getRandomInt(100, 999);
  
    if (randomValue < minValue) {
      minValue = randomValue; // Update minValue if a smaller value is found
    }
  
    if (randomValue > maxValue) {
      maxValue = randomValue; // Update maxValue if a larger value is found
    }
  }
  
  console.log("Minimum value:", minValue);
  console.log("Maximum value:", maxValue);