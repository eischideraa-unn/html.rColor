

function checkGuess(color) {
  let randomNum = Math.floor(Math.random() * 10);
  let correct = false;

  if (color === "purple" && randomNum >= 0 && randomNum <= 3) {
    correct = true;
  } else if (color === "green" && randomNum >= 4 && randomNum <= 6) {
    correct = true;
  } else if (color === "orange" && randomNum >= 7 && randomNum <= 9) {
    correct = true;
  }

  let message = correct
    ? "You guessed right!"
    : "Oops! Wrong guess.";

  showDialog(message);
}

function showDialog(message) {
  let dialog = document.getElementById("dialogBox");
  let dialogMsg = document.getElementById("dialogMessage");
  dialogMsg.textContent = message;
  dialog.classList.add("show");
}

function closeDialog() {
  document.getElementById("dialogBox").classList.remove("show");
}