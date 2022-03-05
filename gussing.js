
let numWon = 0;
let numLost = 0;

for (let i = 0; i < 5; i++) {
  var guessNuber = parseInt(prompt("enter a number a to 5"));
9
  var randomNumber = Math.floor(Math.random() * 5) + 1;

  if (guessNuber == randomNumber) {
    console.log("you have won");
    numWon++;
  } else {
    console.log("you have lost");
    numLost++;
  }
}

document.write("You won : " + numWon + " Times <br/>");
document.write("You lost : " + numLost + " Times");