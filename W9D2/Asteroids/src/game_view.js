// const MovingObject = require("./moving_object");
// const Util = require("./utils");
const Game = require("./game");

function GameView(ctx) {
  this.game = new Game(ctx);
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  let that = this;
  setInterval(function() {
    that.game.draw(that.ctx);
    that.game.moveObjects();
  }, 20);
  this.game.step();
};

module.exports = GameView;