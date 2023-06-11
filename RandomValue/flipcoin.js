function flipCoin() {
    // Generate a random number between 0 and 1
    const random = Math.random();
  
    // Check if the random number is less than 0.5
    if (random < 0.5) {
      console.log("Heads");
    } else {
      console.log("Tails");
    }
  }
  
  // Call the flipCoin() function to simulate a coin flip
  flipCoin();