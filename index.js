//variables
const $restartGame = $("#restart-game");
const $endGame = $("#end-game");
const $restartButton = $("#restart-button");
const $noRestart = $("#no-restart");
const $yesRestart = $("#yes-restart");
const $gameScreen = $("#cover");
const $welcomeScreen = $("#welcome-screen");
const $playerX = $("#player-x");
const $playerO = $("#player-o");
const $cpuStart = $("#cpu-start");
const $humanStart = $("#human-start");
const $playerXName = $("#x-score");
const $playerOName = $("#o-score");

let playerOneToken = "x";
let playerOneName = "p1";
let playerTwoToken = "o";
let playerTwoName = "p2";
let cpuName = "cpu";
let gameMode;

function gameModeCheck(gameMode) {
  if (gameMode === "human") {
    if (playerOneToken === "x") {
      $playerXName.html(playerOneName);
      $playerOName.html(playerTwoName);
    } else {
      $playerXName.html(playerTwoName);
      $playerOName.html(playerOneName);
    }
  } else {
    if (playerOneToken === "x") {
      $playerXName.html(playerOneName);
      $playerOName.html(cpuName);
    } else {
      $playerXName.html(cpuName);
      $playerOName.html(playerOneName);
    }
  }
}

function main() {
  // //variables
  // const $restartGame = $("#restart-game");
  // const $endGame = $("#end-game");
  // const $restartButton = $("#restart-button");
  // const $noRestart = $("#no-restart");
  // const $yesRestart = $("#yes-restart");
  // const $gameScreen = $("#cover");
  // const $welcomeScreen = $("#welcome-screen");
  // const $playerX = $("#player-x");
  // const $playerO = $("#player-o");
  // const $cpuStart = $("#cpu-start");
  // const $humanStart = $("#human-start");
  // const $playerXName = $("#x-score");
  // const $playerOName = $("#o-score");

  // let playerOneToken = "x";
  // let playerOneName = "p1";
  // let playerTwoToken = "o";
  // let playerTwoName = "p2";
  // let cpuName = "cpu";
  // let gameMode;

  $restartGame.hide();
  $endGame.hide();
  $gameScreen.hide();
  $playerX.addClass("normal");
  $playerO.on("click", () => {
    $playerX.removeClass("normal");
    $playerO.addClass("normal");
    playerOneToken = "o";
    playerTwoToken = "x";
  });
  $playerX.on("click", () => {
    $playerO.removeClass("normal");
    $playerX.addClass("normal");
    playerOneToken = "x";
    playerTwoToken = "o";
  });
  $cpuStart.on("click", (e) => {
    gameMode = e.target.value;
    gameModeCheck(gameMode);
    $welcomeScreen.hide();
    $gameScreen.show();
  });
  $humanStart.on("click", (e) => {
    gameMode = e.target.value;
    gameModeCheck(gameMode);
    $welcomeScreen.hide();
    $gameScreen.show();
  });

  $restartButton.on("click", () => {
    $restartGame.show();
  });
  $noRestart.on("click", (e) => {
    $restartGame.hide();
  });
  $yesRestart.on("click", (e) => {
    $restartGame.hide();
  });
}

$(document).ready(main);
