
Function.prototype.inherits = function (parent) {
  function Surrogate () {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function MovingObject () {}

function ship () {}
ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

// Object.create

Function.prototype.inherits = function (parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
}