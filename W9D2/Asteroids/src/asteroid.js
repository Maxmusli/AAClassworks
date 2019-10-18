const MovingObject = require("./moving_object");
const Util = require("./utils");

Util.inherits(Asteroid, MovingObject);

Asteroid.COLOR = "white";
Asteroid.RADIUS = 30;

function Asteroid(object) {
  
  MovingObject.call(this, {
    pos: object["pos"], 
    vel: Util.randomVec(5), 
    color: Asteroid.COLOR, 
    radius: Asteroid.RADIUS,
    game: object["game"]
  });
}

// Asteroid.prototype = Object.create(MovingObject.prototype);
// Asteroid.prototype.contructor = Asteroid;

module.exports = Asteroid;