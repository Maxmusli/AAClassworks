// const MovingObject = require("./moving_object");
// const Util = require("./utils");
const Asteroid = require("./asteroid");
const Ship = require("./ship");

Game.DIM_X = 1000;
Game.DIM_Y = 800;
Game.NUM_ASTEROIDS = 4;

function Game(ctx) {

  this.asteroids = [];
  this.ctx = ctx;
  this.ship = new Ship({pos: [Game.DIM_X / 2, Game.DIM_Y / 2]});
  this.allObjects = [];
  this.addAsteroids();
  
}

Game.prototype.allObjects = function() {
  
};

Game.prototype.addAsteroids = function() {
  
  let i = 0;
  while (i < Game.NUM_ASTEROIDS) {
    let pos = this.randomPosition();
    let asteroid = new Asteroid({pos: pos, game: this});
    this.asteroids.push(asteroid);
    i++;
  }
  this.draw();
};

Game.prototype.randomPosition = function() {
  let randX = Math.floor(Math.random() * Game.DIM_X);
  let randY = Math.floor(Math.random() * Game.DIM_Y);
  return [randX, randY];
};

Game.prototype.draw = function() {
  this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(this.ctx);
  }
};

Game.prototype.moveObjects = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
};

Game.prototype.wrap = function(pos) {
  pos[0] = pos[0] % Game.DIM_X;
  pos[1] = pos[1] % Game.DIM_Y;

  return pos;
};

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.asteroids.length - 1; i++) {
    for (let j = i + 1; j < this.asteroids.length; j++) {
      if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
        alert("COLLISION");
      }
    }
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function (asteroid) {
  
};

module.exports = Game;