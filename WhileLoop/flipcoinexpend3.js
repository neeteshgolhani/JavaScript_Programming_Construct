let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
  // Generate a random number between 0 and 1 (0 represents "Heads", 1 represents "Tails")
  const random = Math.random();

  if (random < 0.5) {
    console.log("Heads");
    headsCount++;
  } else {
    console.log("Tails");
    tailsCount++;
  }
}

if (headsCount === 11) {
  console.log("Heads wins!");
} else {
  console.log("Tails wins!");
}
