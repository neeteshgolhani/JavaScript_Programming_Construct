let totalMoney = 100;
let bets = 0;
let wins = 0;

while (totalMoney > 0 && totalMoney < 200) {
  bets++;

  // Generate a random number between 0 and 1
  const random = Math.random();

  if (random > 0.5) {
    // Win the bet
    totalMoney += 1;
    wins++;
  } else {
    // Lose the bet
    totalMoney -= 1;
  }
}

console.log("Total bets made: " + bets);
console.log("Total wins: " + wins);
console.log("Final money: Rs " + totalMoney);
