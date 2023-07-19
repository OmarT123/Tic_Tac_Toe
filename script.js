var turn = "x";
var gameRun = true;

function playturn(id) {
  if (gameRun) {
    var elem = document.getElementById(id);
    if (elem.innerHTML === "") {
      if (turn === "x") {
        turn = "o";
        elem.innerHTML = "X";
      } else {
        turn = "x";
        elem.innerHTML = "O";
      }
      checkWinner();
    } else {
      alert("This cell is already chosen");
    }
  }
}

function checkWinner() {
  var cells = document.getElementsByClassName("cell");
  var content = ["", "", "", "", "", "", "", "", ""];
  var winner = "";
  for (let i = 0; i < cells.length; i++) {
    content[i] = cells[i].innerHTML;
  }
  if (
    content[0] === content[1] &&
    content[0] === content[2] &&
    content[0] !== ""
  ) {
    winner = content[0];
  } else if (
    content[3] === content[4] &&
    content[3] === content[5] &&
    content[3] !== ""
  ) {
    winner = content[3];
  } else if (
    content[6] === content[7] &&
    content[6] === content[8] &&
    content[6] !== ""
  ) {
    winner = content[6];
  } else if (
    content[0] === content[3] &&
    content[0] === content[6] &&
    content[0] !== ""
  ) {
    winner = content[0];
  } else if (
    content[1] === content[4] &&
    content[1] === content[7] &&
    content[1] !== ""
  ) {
    winner = content[1];
  } else if (
    content[2] === content[5] &&
    content[2] === content[9] &&
    content[2] !== ""
  ) {
    winner = content[2];
  } else if (
    content[0] === content[4] &&
    content[0] === content[8] &&
    content[0] !== ""
  ) {
    winner = content[0];
  } else if (
    content[2] === content[4] &&
    content[2] === content[6] &&
    content[2] !== ""
  ) {
    winner = content[2];
  }

  if (winner !== "") {
    alert(winner + " WON!");
    gameRun = false;
    // wait then restart game

    setTimeout(() => {
      restartGame();
    }, 5000);
  }
}

function restartGame() {
  var cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  turn = "x";
  gameRun = true;
}
