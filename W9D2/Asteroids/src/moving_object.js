function MovingObject(object) {
    this.pos = object["pos"];
    this.vel = object["vel"];
    this.radius = object["radius"];
    this.color = object["color"];
    this.game = object["game"];
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function(ohterObject) {
  let sumradii = this.radius + ohterObject.radius;
  let disX = this.pos[0] - ohterObject.pos[0];
  let disY = this.pos[1] - ohterObject.pos[1];
  let dist = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2));
  return dist < sumradii ? true : false;
};

module.exports = MovingObject;