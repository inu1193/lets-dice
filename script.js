document.getElementById("refresh-btn").addEventListener("click", function () {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let leftDice = `./images/dice${randomNumber1}.png`;
  let rightDice = `./images/dice${randomNumber2}.png`;

  document.getElementById("left-dice").src = leftDice;
  document.getElementById("right-dice").src = rightDice;

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins";
  } else {
    document.querySelector("h1").textContent = "It's a Draw";
  }
  document.getElementById("refresh-btn").textContent = "Replay";
});
