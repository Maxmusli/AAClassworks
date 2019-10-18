// const MovingObject = require("./moving_object");
// const Util = require("./utils");
// const Asteroid = require("./asteroid");
const GameView = require("./game_view");

let canvasWidth = 1000;
let canvasHeight = 800;

document.addEventListener('DOMContentLoaded', SetupCanvas);

function SetupCanvas() {
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  canvas.style.background = "grey";
  let newGame = new GameView(ctx);
  // debugger
  newGame.start();
}