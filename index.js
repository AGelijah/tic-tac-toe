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
const $playerTurn = $("#player-turn");
const $tile = $(".tile");
const $tileToken = $(".tile-token");
const $tokenX = $(".token-x");
const $tokenO = $(".token-o");

let playerOneToken = "x";
let playerOneName = "p1";
let playerTwoToken = "o";
let playerTwoName = "p2";
let xToken = "/assets/icon-x.svg";
let oToken = "/assets/icon-o.svg";
let cpuName = "cpu";
let gameMode;
let roundsPlayed = 0;

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
function playerTurn(round) {
  if (round % 2 === 0) {
    $("#player-token-o").show();
    $("#player-token-x").hide();
    return;
  }
  if (round % 2 === 1) {
    $("#player-token-x").show();
    $("#player-token-o").hide();
    return;
  }
}

function main() {
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
  $tile.on("click", (e) => {
    if ($($(e.currentTarget).children()[0]).is(":visible")) {
      alert("Invalid Move");
      return;
    }
    playerTurn(roundsPlayed);
    if (roundsPlayed % 2 === 1) {
      $(e.currentTarget).prepend(
        `<img src="/assets/icon-o.svg" alt="" class="token" />`
      );
      $(e.currentTarget).removeClass("x-outline");
      $(e.currentTarget).removeClass("o-outline");
    } else {
      $(e.currentTarget).prepend(
        `<img src="/assets/icon-x.svg" alt="" class="token" />`
      );
      $(e.currentTarget).removeClass("x-outline");
      $(e.currentTarget).removeClass("o-outline");
    }
    roundsPlayed += 1;
  });
  $tile.on("mouseenter", (e) => {
    if (!$($(e.currentTarget).children()[0]).is(":visible")) {
      if (roundsPlayed % 2 === 1) {
        $(e.currentTarget).addClass(" o-outline");
      } else {
        $(e.currentTarget).addClass(" x-outline");
      }
    }
  });
  $tile.on("mouseleave", (e) => {
    if (roundsPlayed % 2 === 1) {
      $(e.currentTarget).removeClass(" o-outline");
    } else {
      $(e.currentTarget).removeClass(" x-outline");
    }
  });

  $restartButton.on("click", () => {
    $restartGame.show();
  });
  $noRestart.on("click", (e) => {
    $restartGame.hide();
  });
  $yesRestart.on("click", (e) => {
    roundsPlayed = 0;
    playerTurn(roundsPlayed);
    $tile.children().remove();
    $restartGame.hide();
  });
}

$(document).ready(main);
