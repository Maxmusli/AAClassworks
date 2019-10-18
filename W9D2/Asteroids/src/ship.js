const MovingObject = require("./moving_object");
const Util = require("./utils");

Ship.RADIUS = 10;
Ship.COLOR = "green";

function Ship(object) {
  MovingObject.call(this, {
    pos: object["pos"],
    vel: [0, 0],
    color: Ship.COLOR,
    radius: Ship.RADIUS,
    game: object["game"]
  });
}